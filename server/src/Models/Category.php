<?php

namespace App\Models;

abstract class Category
{
    public string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }
}
