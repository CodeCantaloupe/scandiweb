<?php

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;

// Define the Category type
$categoryType = new ObjectType([
    'name' => 'Category',
    'fields' => [
        'id' => Type::string(),
        'name' => Type::string(),
    ]
]);

$attributeType = new ObjectType([
    'name' => 'Attribute',
    'fields' => [
        'id' => Type::string(),
        'value' => Type::string(),
        'displayValue' => Type::string(),
    ]
]);

// Define the Product type
$productType = new ObjectType([
    'name' => 'Product',
    'fields' => [
        'id' => Type::string(),
        'name' => Type::string(),
        'description' => Type::string(),
        'inStock' => Type::boolean(),
        'gallery' => Type::listOf(Type::string()),
        'category' => [
            'type' => $categoryType,
            'resolve' => function ($product) {
                return getCategoryById($product['category_id']);
            }
        ],
        'attributes' => [
            'type' => Type::listOf($attributeType),
            'resolve' => function ($product) {
                return getAttributesByProductId($product['id']); // Fetch attributes for the product
            }
        ],
        'brand' => Type::string(),
        'prices' => Type::listOf(Type::float())
    ]
]);

$currencyType = new ObjectType([
    'name' => 'Currency',
    'fields' => [
        'label' => Type::string(),
        'symbol' => Type::string(),
    ]
]);

$priceType = new ObjectType([
    'name' => 'Price',
    'fields' => [
        'amount' => Type::float(),
        'currency' => $currencyType,
    ]
]);

// Define the Query type with 'products' and 'categories' fields
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'products' => [
            'type' => Type::listOf($productType),
            'resolve' => function () {
                return getProducts(); // Resolver for products
            }
        ],
        'categories' => [
            'type' => Type::listOf($categoryType),
            'resolve' => function () {
                return getCategories(); // Resolver for categories
            }
        ]
    ]
]);

// Define Mutation type (for example, sum operation)
$mutationType = new ObjectType([
    'name' => 'Mutation',
    'fields' => [
        'sum' => [
            'type' => Type::int(),
            'args' => [
                'x' => ['type' => Type::int()],
                'y' => ['type' => Type::int()],
            ],
            'resolve' => static fn($root, $args): int => $args['x'] + $args['y'],
        ],
    ],
]);

// Return the schema with Query and Mutation
return new Schema(
    (new SchemaConfig())
        ->setQuery($queryType)
        ->setMutation($mutationType)
);
