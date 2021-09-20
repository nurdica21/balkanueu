<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials:true");

include_once "./db.php";
include_once "./replyHelper.php";

session_start();

if($_SERVER['REQUEST_METHOD']=='POST')
logout($con);

function logout($con){

    if(!isset($_SESSION['user'])){
        sendReply(400,"Niste prijavljeni");
    }
    unset($_SESSION['user']);
    session_destroy();
    sendReply(200,"Uspjesno ste se odjavili");
}
