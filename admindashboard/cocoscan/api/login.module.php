<?php
require_once "config/connection.php";

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

if(isset($data['email']) && isset($data['password'])) {
    $email = $data['email'];
    $password = $data['password'];

    $sql = "SELECT * FROM users WHERE username = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            $admin_role = $user['admin_role'];
        
            session_start();
        
            if ($admin_role == 1) {
                $_SESSION['user_id'] = $user['user_id'];
                $_SESSION['district'] = $user['district'];
                echo json_encode(["success" => true, "redirect" => "index.php"]);
                exit();
            } elseif ($admin_role == 2) {
                $_SESSION['user_id'] = $user['user_id'];
                $_SESSION['district'] = $user['district'];
                echo json_encode(["success" => true, "redirect" => "admin/index.php"]);
                exit();
            } else {
                echo json_encode(["success" => false, "message" => "Invalid admin role"]);
                exit();
            }
        } else {
            echo json_encode(["success" => false, "message" => "Invalid email or password"]);
            exit();
        }
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password"]);
        exit();
    }
} else {
    echo json_encode(["success" => false, "message" => "Email or password not provided"]);
    exit();
}

$conn->close();
?>
