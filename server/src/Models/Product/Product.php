<?php

namespace App\Models;

include 'Category.php';
include 'AttributeSet.php';
include 'Price.php';

abstract class Product
{
    public int $id;
    public string $name;
    public bool $inStock;
    public array $gallery;
    public string $description;
    public Category $category;
    public AttributeSet $attributes;
    public array $prices;
    public string $brand;

    public function __construct(
        int $id,
        string $name,
        bool $inStock,
        array $gallery,
        string $description,
        Category $category,
        AttributeSet $attributes,
        Price $prices,
        string $brand,
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->inStock = $inStock;
        $this->gallery = $gallery;
        $this->description = $description;
        $this->category = $category;
        $this->attributes = $attributes;
        $this->prices = $prices;
        $this->brand = $brand;
    }
}
