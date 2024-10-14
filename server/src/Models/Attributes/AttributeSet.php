<?php

namespace App\Models;

include 'Attribute.php';

abstract class AttributeSet
{
    public int $id;
    public array $items;
    public string $name;
    public string $type;

    public function __construct(int $id, string $name, string $type, array $items)
    {
        foreach ($items as $attribute) {
            if (!$attribute instanceof Attribute) {
                throw new \InvalidArgumentException("All attributes must be instances of the Attribute class.");
            }
        }
        
        $this->id = $id;
        $this->items = $items;
        $this->name = $name;
        $this->type = $type;
    }
}