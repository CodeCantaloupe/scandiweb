<?php

namespace App\Models;

abstract class Attribute {
    public string $displayValue;
    public string $value;
    public int $id;

    public function __construct(string $displayValue, string $value, int $id)
    {
        $this->displayValue = $displayValue;
        $this->value = $value;
        $this->id = $id;
    }
}