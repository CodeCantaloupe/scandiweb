// resolvers/productResolver.php
<?php

include_once 'Database.php';

function getAttributesByProductId($productId) {
    
    $db = (new Database())->getConnection();
    $sql = "SELECT * FROM attributes WHERE product_id = ?";
    $stmt = $db->prepare($sql);
    $stmt->bind_param("s", $productId); 
    $stmt->execute();
    $result = $stmt->get_result();

    $attributes = [];
    while ($row = $result->fetch_assoc()) {
        $attributes[] = [
            'id' => $row['id'],
            'value' => $row['value'],
            'displayValue' => $row['display_value']
        ];
    }

    return $attributes;
}
