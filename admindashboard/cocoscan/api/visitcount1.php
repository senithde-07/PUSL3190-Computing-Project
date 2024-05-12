<?php
require_once "config/connection.php";

header("Content-Type: application/json");

$response = array();

$currentDate = date('Y-m-d');

$sql = "SELECT COUNT(DISTINCT ip) AS daily_count FROM visits WHERE DATE(date) = '$currentDate'";

$result = $conn->query($sql);

if ($result === false) {
    $response['success'] = false;
    $response['message'] = "Error in fetching daily count: " . $conn->error;
    http_response_code(500);
    echo json_encode($response);
    exit(); 
}


$row = $result->fetch_assoc();


$dailyCount = $row['daily_count'];


$conn->close();


$response['success'] = true;
$response['daily_count'] = $dailyCount;


echo json_encode($response);
?>
