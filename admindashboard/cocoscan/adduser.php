
<?php

session_start();


if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit; 
}
?>
<!DOCTYPE HTML>
<html>

<head>
    <title>Dashboard - Add User</title>
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

    <style>
        #map {
            height: 400px;
        }
    </style>
</head>

<body>

    <div id="mySidenav" class="sidenav">
        <img src="assets/img/CocoScan_logo.png" class="w-40 mb-10 mx-auto">
        <a href="index.php" class="icon-a "><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
        <a href="map.php" class="icon-a"><i class="fa fa-map"></i> &nbsp;&nbsp;Map</a>
        <a href="issueslist.php" class="icon-a"><i class="fa fa-question"></i> &nbsp;&nbsp;Issues List</a>
        <a href="adduser.php" class="icon-a font-bold"><i class="fa fa-tasks"></i> &nbsp;&nbsp;Add User</a>
        <a href="userlist.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;User List</a>
        <a href="api/logout.php" class="icon-a"><i class="fa fa-sign-out"></i> &nbsp;&nbsp;Logout</a>
    </div>

    <div id="main">
        <div class="head">
            <div class="col-div-6 font-bold">
                <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav">&#9776; Add Users</span>
                <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav2">&#9776; Add Users</span>
            </div>
            <div class="col-div-6">
                <div class="profile">
                    <img src="assets/img/user.png" class="pro-img" />
                    <p>Admin<span>COCO</span></p>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
        <br />
        <div class="clearfix"></div>
        <br /><br />
        <div class="col-div-12">
            <div class="box-8">
                <div class="content-box">
                    <form id="addUserForm">
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 text-sm font-bold mb-2" style="color:white">Email:</label>
                            <input type="email" placeholder="Enter User Email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="password" class="block text-gray-700 text-sm font-bold mb-2" style="color:white">Password:</label>
                            <input type="password"  placeholder="Enter User Password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label for="role" class="block text-gray-700 text-sm font-bold mb-2" style="color:white">Role:</label>
                            <select id="role" name="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">Select Role</option> 
                                <option value="1">Super Admin</option>
                                <option value="2">Admin</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="district" class="block text-gray-700 text-sm font-bold mb-2" style="color:white">District:</label>
                            <select id="district" name="district" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="0">Select</option>    
                                <option value="1">Ampara</option>
                                <option value="2">Anuradhapura</option>
                                <option value="3">Badulla</option>
                                <option value="4">Batticaloa</option>
                                <option value="5">Colombo</option>
                                <option value="6">Galle</option>
                                <option value="7">Gampaha</option>
                                <option value="8">Hambantota</option>
                                <option value="9">Kalutara</option>
                                <option value="10">Jaffna</option>
                                <option value="11">Kalutara</option>
                                <option value="12">Kandy</option>
                                <option value="13">Kegalle</option>
                                <option value="14">Kilinochchi</option>
                                <option value="15">Kurunegala</option>
                                <option value="16">Mannar</option>
                                <option value="17">Matale</option>
                                <option value="18">Matara</option>
                                <option value="19">Monaragala</option>
                                <option value="20">Mullaitivu</option>
                                <option value="21">Nuwara Eliya</option>
                                <option value="22">Polonnaruwa</option>
                                <option value="23">Puttalam</option>
                                <option value="24">Ratnapura</option>
                                <option value="25">Trincomalee</option>
                                <option value="26">Vavuniya</option>
                            </select>
                        </div>

                        <div class="flex items-center justify-between">
                            <button type="button" style="background-color:#3ab54b" id="submitBtn" class="bg-green-500 hover:bg-green-700 text-black text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>
       
    </div>

    <!-- Include Leaflet JS -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
         $(document).ready(function () {
            $("#submitBtn").click(function () {
                var formData = $("#addUserForm").serialize(); 
                console.log(formData);
               
                $.ajax({
                    type: "POST",
                    url: "api/user.module.php",
                    data: {
                        formData: formData,
                        action: "adduser"
                    },
                    success: function (response) {
                        if(response.success){
                        alert("User Not added successfully");
                        }
                        else{
                            alert("User added successfully");
                        }
                        
                        console.log(response);
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
            });
        });
        $(".nav").click(function () {
            $("#mySidenav").css('width', '70px');
            $("#main").css('margin-left', '70px');
            $(".logo").css('visibility', 'hidden');
            $(".logo span").css('visibility', 'visible');
            $(".logo span").css('margin-left', '-10px');
            $(".icon-a").css('visibility', 'hidden');
            $(".icons").css('visibility', 'visible');
            $(".icons").css('margin-left', '-8px');
            $(".nav").css('display', 'none');
            $(".nav2").css('display', 'block');
        });

        $(".nav2").click(function () {
            $("#mySidenav").css('width', '300px');
            $("#main").css('margin-left', '300px');
            $(".logo").css('visibility', 'visible');
            $(".icon-a").css('visibility', 'visible');
            $(".icons").css('visibility', 'visible');
            $(".nav").css('display', 'block');
            $(".nav2").css('display', 'none');
        });
    </script>

</body>

</html>
