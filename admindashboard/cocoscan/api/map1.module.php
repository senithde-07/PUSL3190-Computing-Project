<?php
session_start(); 

require_once "config/connection.php";

header("Content-Type: application/json");

$response = array();


if(isset($_SESSION['district'])) {
    $district = $_SESSION['district'];

    $sql = "SELECT * FROM locations WHERE district = '$district'";
    $result = $conn->query($sql);

    if ($result) {
        $locations = array();
        while ($row = $result->fetch_assoc()) {
            $locations[] = $row;
        }
       
        $response['success'] = true;
        $response['locations'] = $locations;
    } else {
        $response['success'] = false;
        $response['message'] = "Failed to fetch locations data";
        http_response_code(500);
    }
} else {
    $response['success'] = false;
    $response['message'] = "District not set in session.";
    http_response_code(400);
}

$conn->close();

echo json_encode($response);
?>
