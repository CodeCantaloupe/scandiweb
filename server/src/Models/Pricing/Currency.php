<?php

namespace App\Models;

abstract class Currency {
    public string $label;
    public string $symbol;

    public function __construct(string $label, string $symbol) {
        $this->label = $label;
        $this->symbol = $symbol;
    }
}