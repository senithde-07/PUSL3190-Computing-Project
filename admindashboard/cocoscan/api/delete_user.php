<?php

require_once "config/connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["userId"])) {
    
    $userId = mysqli_real_escape_string($conn, $_POST["userId"]);

  
    $sql = "DELETE FROM users WHERE user_id = '$userId'";

   
    if ($conn->query($sql) === TRUE) {
        
        $response["success"] = true;
        $response["message"] = "User deleted successfully";
    } else {
       
        $response["success"] = false;
        $response["message"] = "Error deleting user: " . $conn->error;
        http_response_code(500); 
    }
} else {
   
    $response["success"] = false;
    $response["message"] = "Invalid request";
    http_response_code(400); 
}


$conn->close();


echo json_encode($response);
?>
