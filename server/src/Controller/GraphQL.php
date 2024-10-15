<?php

namespace App\Controller;

use GraphQL\GraphQL as GraphQLBase;
use Throwable;

class GraphQL
{
    public static function handle()
    {
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization");
        header('Content-Type: application/json; charset=UTF-8');

        try {
            // Get raw input from request
            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new \RuntimeException('Failed to get php://input');
            }
            
            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;

            // Load schema from a separate file
            $schema = require_once __DIR__ . '/../graphql/schema.php';

            // Execute the GraphQL query
            $result = GraphQLBase::executeQuery($schema, $query, null, null, $variableValues);
            $output = $result->toArray();

        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        // Return the response
        echo json_encode($output);
    }
}
