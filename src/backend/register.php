<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials:true");


include_once "./db.php";
include_once "./replyHelper.php";

session_start();



if($_SERVER['REQUEST_METHOD']=='POST')
register($con);


function register($con){
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $rPwd = $_POST['rPwd'];
    $age = $_POST['age'];
    $countryF = $_POST['countryF'];
    $countryI = $_POST['countryI'];
    $city = $_POST['city'];

    if(empty($fName) || empty($lName) || empty($email) || empty($pwd) || empty($rPwd) || empty($age) || empty($countryF) || empty($countryI) || empty($city)){
       sendReply(400,"Sva polja su obavezna");
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        sendReply(400,"Email nije tacan");
    }
       

    if($pwd != $rPwd){
        sendReply(400,"Lozinke se razlikuju");
        
    }

    $pwd = password_hash($pwd, PASSWORD_DEFAULT);
    $rPwd = $pwd;

    $sql = "INSERT INTO users(first_name, last_name, email, pwd, r_pwd, age, country_from, country_in, city) values(?, ?, ?, ?, ?, ?, ?, ?, ?);";
    $stmt = $con->stmt_init();

    if (!$stmt->prepare($sql)){
        sendReply(400,"Greska, pokusajte kasnije");
        
    }
    $stmt->bind_param('sssssssss', $fName, $lName ,$email, $pwd, $rPwd, $age, $countryF, $countryI, $city);
    $stmt->execute();

    if($stmt->affected_rows > 0){
        sendReply(200,"Uspjesno ste se registrovali");
        
    }
    else{
        sendReply(400,"Greska, Pokusajte ponovo");
        
        
    }
}
