<?php 
$my = "12345678";

$password = password_hash($my, PASSWORD_DEFAULT);
echo $password;
?>
