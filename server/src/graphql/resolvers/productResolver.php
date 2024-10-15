<?php
require_once 'Database.php';

function getProducts() {
    $db = (new Database())->getConnection();
    $query = "SELECT * FROM products";
    $result = $db->query($query);
    $products = [];

    while ($row = $result->fetch_assoc()) {
        $row['gallery'] = json_decode($row['gallery']);
        $products[] = $row;
    }

    return $products;
}
?>
