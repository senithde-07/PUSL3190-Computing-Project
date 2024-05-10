<?php
session_start(); 

require_once "config/connection.php";

header("Content-Type: application/json");

$response = array();


if(isset($_SESSION['district'])) {
    $district = $_SESSION['district'];

    $sql_category_1 = "SELECT COUNT(*) AS count_category_1 FROM locations WHERE catgeory = 1 AND district = '$district'";
    $result_category_1 = $conn->query($sql_category_1);

    if ($result_category_1 === false) {
        $response['success'] = false;
        $response['message'] = "Error in category 1 query: " . $conn->error;
        http_response_code(500);
        echo json_encode($response);
        exit(); 
    }

    $count_category_1 = $result_category_1->fetch_assoc()['count_category_1'];

    $sql_category_2 = "SELECT COUNT(*) AS count_category_2 FROM locations WHERE catgeory = 2 AND district = '$district'";
    $result_category_2 = $conn->query($sql_category_2);

    if ($result_category_2 === false) {
        $response['success'] = false;
        $response['message'] = "Error in category 2 query: " . $conn->error;
        http_response_code(500);
        echo json_encode($response);
        exit(); 
    }

    $count_category_2 = $result_category_2->fetch_assoc()['count_category_2'];

    $response['success'] = true;
    $response['counts'] = array(
        'category_1' => $count_category_1,
        'category_2' => $count_category_2
    );

    $conn->close();

    echo json_encode($response);
} else {
    $response['success'] = false;
    $response['message'] = "District not set in session.";
    http_response_code(400);
    echo json_encode($response);
}
?>
