<?php
namespace App\Controller;

use App\Exception\apiException;
use App\Model\user;
use App\Service\Database;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/api')]
class userController extends AbstractController
{
    private $userModel;

    public function __construct(Database $db)
    {
        $this->userModel = new User($db);
    }

    private function error(string $name, string $message, int $status): Response
    {
        return $this->json([
            'error' => [
                'name' => $name,
                'message' => $message
            ]
        ], $status);
    }

    private function success(string $name, string $message, int $status): Response
    {
        return $this->json([
            'success' => [
                'name' => $name,
                'message' => $message
            ]
        ], $status);
    }

    #[Route('/user/{id}', name: 'get_user', methods: ['GET'])]
    public function getUserId(int $id): Response
    {
        try {
            $user = $this->userModel->getUserById($id);
            return $this->json($user);
        } catch (apiException $e) {
            return $this->error($e->getName(), $e->getMessage(), $e->getStatus());
        }
    }

    #[Route('/register', name : 'register', methods : ['POST'])]
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $username = trim($data['username'] ?? null);
        $email = trim($data['email'] ?? null);
        $password = trim($data['password'] ?? null);
        $firstname = trim($data['firstname'] ?? null);
        $lastname = trim($data['lastname'] ?? null);

        if (!$username) {
            return $this->error('username', 'Missing username', 400);
        }
        if (!$email) {
            return $this->error('email', 'Missing email', 400);
        }
        if (!$password) {
            return $this->error('password', 'Missing password', 400);
        }
        if (!$firstname) {
            return $this->error('firstname', 'Missing firstname', 400);
        }
        if (!$lastname) {
            return $this->error('lastname', 'Missing lastname', 400);
        }

        try {
            $this->userModel->registerUser($username, $email, $password, $firstname, $lastname);
            return $this->success('register', 'User registered successfully', 201);
        } catch (apiException $e) {
            return $this->error($e->getName(), $e->getMessage(), $e->getStatus());
        }

    }

    #[Route('/login', name : 'login', methods : ['POST'])]
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $username = trim($data['username'] ?? null);
        $password = trim($data['password'] ?? null);

        if (!$username) {
            return $this->error('username', 'Missing username', 400);
        }
        if (!$password) {
            return $this->error('password', 'Missing password', 400);
        }

        try {
            $user = $this->userModel->loginUser($username, $password);
            return $this->success('login', "Login successful. Welcome, {$user['firstname']}!", 201);
        } catch (apiException $e) {
            return $this->error($e->getName(), $e->getMessage(), $e->getStatus());
        }
    }

    #[Route('/user/{id}/update_password', name: 'update_password', methods: ['POST'])]
    public function updatePassword(int $id, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $newPassword = trim($data['password'] ?? null);

        if (!$newPassword) {
            return $this->error('password', 'Missing new password', 400);
        }

        try {
            $this->userModel->updatePassword($newPassword, $id);
            return $this->success('update password', 'Password updated successfully', 200);
        } catch (apiException $e) {
            return $this->error($e->getName(), $e->getMessage(), $e->getStatus());
        }
    }
}
