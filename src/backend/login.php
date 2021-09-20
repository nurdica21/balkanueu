<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials:true");

include_once "./db.php";
include_once "./replyHelper.php";

session_start();

if($_SERVER['REQUEST_METHOD']=='POST' )
login($con);

function login($con){



    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
 

 
     if(empty($email) || empty($pwd)){
         sendReply(400, "Sva polja su obavezna");
     }
 
     $sql = "SELECT pwd FROM users WHERE email=?;";
     $stmt = $con->stmt_init();
     if(!$stmt->prepare($sql)){
         sendReply(400,"Greska! Pokusajte kasnije");
         $stmt->bind_param('s', $email);
         $stmt->execute();
         $result= $stmt->get_result();
         if(mysqli_num_rows($result) > 0){
             //....
             $data= $result->fetch_assoc();
             $isValid = password_verify($pwd,$data['pwd']);
             if(!$isValid)
                 sendReply(400, "Email ili lozinka nisu tacni");
             
                 $_SESSION['user'] = $email;
                 sendReply(200, "Dobrodosli");
 
         }
         else
         sendReply(400," Email ili lozinka nisu tacni");
     }
 
 }