<?php
require_once "config/connection.php";

header("Content-Type: application/json");

$response = array();

$sql = "SELECT u.username, d.name ,u.user_id,u.admin_role
        FROM users u
        INNER JOIN districts d ON u.district= d.id_code";

$result = $conn->query($sql);

if ($result) {
    $userDistricts = array();
    while ($row = $result->fetch_assoc()) {
        $userDistricts[] = $row;
    }
   
    $response['success'] = true;
    $response['user_districts'] = $userDistricts;
} else {
    $response['success'] = false;
    $response['message'] = "Failed to fetch user districts data";
    http_response_code(500);
}

$conn->close();

echo json_encode($response);
?>
