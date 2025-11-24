<?php
namespace App\Service;

use PDO;
use PDOException;

class Database
{
    private $pdo;

    public function __construct(string $db_host, string $db_name, string $db_user, string $db_password)
    {
        try {
            $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
            $this->pdo = new PDO($dsn, $db_user, $db_password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }

    public function getConnection()
    {
        return $this->pdo;
    }
}