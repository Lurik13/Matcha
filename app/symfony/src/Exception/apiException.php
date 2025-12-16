<?php

namespace App\Exception;

use Exception;

class apiException extends Exception
{

    private string $name;
    private int $status;


    public function __construct(string $name, string $message, int $status = 400)
    {
        parent::__construct($message);
        $this->name = $name;
        $this->status = $status;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getStatus(): int
    {
        return $this->status;
    }
}