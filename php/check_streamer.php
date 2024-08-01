<?php
session_start();
header('Content-Type: application/json');

$response = array();

if (isset($_SESSION['streamer'])) {
    $response['status'] = 'success';
    $response['streamer'] = $_SESSION['streamer'];
} else {
    $response['status'] = 'error';
}

echo json_encode($response);
?>
