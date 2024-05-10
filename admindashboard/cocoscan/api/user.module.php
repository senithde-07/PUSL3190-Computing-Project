<?php
require_once "config/connection.php";

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  
    if (isset($_POST['formData'])) {
    
        parse_str($_POST['formData'], $formDataArray);
        
       
        if (isset($formDataArray['email'], $formDataArray['password'], $formDataArray['role'], $formDataArray['district'])) {
           
            $email = $formDataArray['email'];
            $password = $formDataArray['password'];
            $role = $formDataArray['role'];
            $district = $formDataArray['district'];

            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            $sql = "INSERT INTO users (username, password, admin_role, district) VALUES ('$email', '$hashed_password', '$role', '$district')";
            
            if (mysqli_query($conn, $sql)) {
                echo json_encode(["status" => "success", "message" => "User added successfully"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error adding user: " . mysqli_error($connection)]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Missing required fields"]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Form data not provided"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
