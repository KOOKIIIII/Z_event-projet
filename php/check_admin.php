<?php
session_start();
header('Content-Type: application/json');

$response = array();

if (isset($_SESSION['admin'])) {
    $response['status'] = 'success';
    $response['admin'] = $_SESSION['admin'];
} else {
    $response['status'] = 'error';
}

echo json_encode($response);
?>
