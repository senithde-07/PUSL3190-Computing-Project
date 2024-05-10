<?php
require_once "config/connection.php";


header("Content-Type: application/json");


$response = array();


$sql = "SELECT * FROM locations";
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


$conn->close();


echo json_encode($response);
?>
