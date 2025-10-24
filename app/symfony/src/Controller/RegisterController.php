<?php
namespace App\Controller;

use App\Model\User;
use App\Service\Database;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RegisterController extends AbstractController
{
    private $userModel;

    public function __construct(Database $db)
    {
        $this->userModel = new User($db);
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
            return new Response("Missing required fields", 400);
        }

        try {
            $this->userModel->registerUser($username, $email, $password, $firstname, $lastname);
            return new Response("User registered successfully", 201);
        } catch (\Exception $e) {
            return new Response($e->getMessage(), 400);
        }

    }
}