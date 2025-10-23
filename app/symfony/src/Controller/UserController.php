<?php
namespace App\Controller;

use App\Model\User;
use App\Service\Database;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
            return new Response("User not found", 404);
        }

        return new Response("User ID: {$user['user_id']}, Username: {$user['username']}");
    }
}
