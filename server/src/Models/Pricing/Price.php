<?php

namespace App\Models;

abstract class Price {
    public int $amount;
    public Currency $currency;

    public function __construct(int $amount, Currency $currency) {
        $this->amount = $amount;
        $this->currency = $currency;
    }
}