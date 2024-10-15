<?php
require_once 'Database.php';

function getCategories() {
    $db = (new Database())->getConnection();
    $query = "SELECT * FROM categories";
    $result = $db->query($query);
    $categories = [];

    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }

    return $categories;
}

function getCategoryById($categoryId) {
    $db = (new Database())->getConnection();
    $query = "SELECT name FROM categories WHERE id = ?";
    $stmt = $db->prepare($query);
    $stmt->bind_param('i', $categoryId);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    return $row['name'];
}
?>
