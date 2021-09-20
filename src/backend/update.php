<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials:true");


include_once "./db.php";
include_once "./replyHelper.php";

session_start();

if($_SERVER['REQUEST_METHOD']=='PATCH')
update($con);


function update($con){}