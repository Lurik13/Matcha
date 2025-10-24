<?php
namespace App\Controller;

use App\Model\User;
use App\Service\Database;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LoginController extends AbstractController
{
    private $userModel;

    public function __construct(Database $db)
    {
        $this->userModel = new User($db);
    }

    #[Route('/login', name : 'login', methods : ['POST'])]

    public function login()
    {

    }
}