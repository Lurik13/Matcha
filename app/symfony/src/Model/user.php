<?php

namespace App\Model;

Use PDO;
Use App\Service\Database;
Use App\Exception\apiException;

class user
{
    private $pdo;

    public function __construct(Database $db)
    {
        $this->pdo = $db->getConnection();
    }

    public function getUserById(int $id): array
    {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE user_id = ?");
        $stmt->execute([$id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$user) {
            throw new apiException('user', 'User not found.', 404);
        }
        return $user;
    }

    public function registerUser(string $username, string $email, string $password, string $firstname, string $lastname)
    {
        $stmt = $this->pdo->prepare("SELECT COUNT(*) FROM users WHERE username = ? OR email = ?");

        $stmt->execute([$username, $email]);
        
        if ($stmt->fetchColumn() > 0) {
            throw new apiException('user', 'Username or email already exists.', 409); 
        }

        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        $stmt = $this->pdo->prepare("INSERT INTO users (username, email, password, firstname, lastname) VALUES (?, ?, ?, ?, ?)");

        if (!$stmt->execute([$username, $email, $hashedPassword, $firstname, $lastname])) {
            throw new apiException('register', 'Failed to register user.', 500);
        }
    }

    public function loginUser(string $username, string $password)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$user) {
            throw new apiException('username', 'Username does not exist.', 404);
        }
        if (!password_verify($password, $user['password'])) {
            throw new apiException('password', 'Invalid password.', 401);
        }
        return $user;
    }

    public function updatePassword(string $password, int $id)
    {
        $stmt = $this->pdo->prepare("UPDATE users SET password = ? WHERE user_id = ?");
        
        if (!$stmt->execute([password_hash($password, PASSWORD_BCRYPT), $id])) {
            throw new apiException('update password', 'Failed to update password.', 500);
        }
    }

    public function updateUsername(string $username, int $id)
    {
        
    }
}