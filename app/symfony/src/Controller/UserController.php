<?php
namespace App\Controller;

use App\Model\User;
use App\Service\Database;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api')]
class UserController extends AbstractController
{
    private $userModel;

    public function __construct(Database $db)
    {
        $this->userModel = new User($db);
    }

    #[Route('/user/{id}', name: 'get_user', methods: ['GET'])]
    public function getUserId(int $id): Response
    {
        $user = $this->userModel->getUserById($id);

        if (!$user) {
            return $this->json(['error' => 'User not found'], 404);
        }

        return $this->json($user);
    }

    #[Route('/register', name : 'register', methods : ['POST'])]
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $username = trim(htmlspecialchars($data['username'] ?? null));
        $email = trim(htmlspecialchars($data['email'] ?? null));
        $password = trim(htmlspecialchars($data['password'] ?? null));
        $firstname = trim(htmlspecialchars($data['firstname'] ?? null));
        $lastname = trim(htmlspecialchars($data['lastname'] ?? null));

        if (!$username || !$email || !$password || !$firstname || !$lastname) {
            return $this->json(['error' => 'Missing required fields'], 400);
        }

        try {
            $this->userModel->registerUser($username, $email, $password, $firstname, $lastname);
            return $this->json(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 400);
        }

    }

    #[Route('/login', name : 'login', methods : ['POST'])]
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $username = trim(htmlspecialchars($data['username'] ?? null));
        $password = trim(htmlspecialchars($data['password'] ?? null));

        if (!$username || !$password) {
            return $this->json(['error' => 'Missing username or password'], 400);
        }

        try {
            $user = $this->userModel->loginUser($username, $password);
            return $this->json(['message' => "Login successful. Welcome, {$user['firstname']}!"], 201);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 401);
        }
    }

    #[Route('/user/{id}/update_password', name: 'update_password', methods: ['POST'])]
    public function updatePassword(int $id, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $newPassword = trim(htmlspecialchars($data['password'] ?? null));

        if (!$newPassword) {
            return $this->json(['error' => 'Missing new password'], 400);
        }

        $hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);
        $this->userModel->updatePassword($hashedPassword, $id);

        return $this->json(['message' => 'Password updated successfully']);
    }
}
