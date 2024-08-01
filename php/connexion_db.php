<?php
$servername = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "zevent_db";

$conn = new mysqli($servername, $db_username, $db_password, $db_name);

if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}
?>
