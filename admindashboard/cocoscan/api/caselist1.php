<?php
session_start(); 

require_once "config/connection.php";

header("Content-Type: application/json");

$response = array();


if(isset($_SESSION['district'])) {
    $district = $_SESSION['district'];

    $sql = "SELECT l.client_id, cl.name, cl.mobile, c.category_name, d.name AS district_name
            FROM locations l
            INNER JOIN category c ON l.catgeory = c.category_code
            INNER JOIN districts d ON l.district = d.id_code
            INNER JOIN clients cl ON l.client_id = cl.client_id
            WHERE l.district = '$district'";

    $result = $conn->query($sql);

    if ($result) {
        $locationData = array();
        while ($row = $result->fetch_assoc()) {
            $locationData[] = $row;
        }
       
        $response['success'] = true;
        $response['locations'] = $locationData;
    } else {
        $response['success'] = false;
        $response['message'] = "Failed to fetch location data";
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
