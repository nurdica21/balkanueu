<?php
$host = "localhost:3306";
$db = "balkanueu";
$user = "root";
$pwd ="";

$con = new mysqli($host, $user, $pwd, $db);

if($con->connect_errno){
    http_response_code(400);
    header('Connect_type: text/plain');
    echo $con->connect_error;
    exit();
}