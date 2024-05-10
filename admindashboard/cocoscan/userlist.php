<?php

session_start();


if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit; 
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <!-- Link to your CSS files -->
  <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    /* Add custom CSS styles */
    .table thead th {
      background-color: #3ab54b; /* Green background for table header */
      color: #000000; /* Black text */
    }

    .delete-button {
      background-color: #ff0000; /* Red background */
      color: #ffffff; /* White text */
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
    }
  </style>
</head>

<body>

  <div id="mySidenav" class="sidenav">
    <img src="assets/img/CocoScan_logo.png" class="w-40 mb-10 mx-auto">
    <a href="index.php" class="icon-a font-bold"><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
    <a href="map.php" class="icon-a"><i class="fa fa-question"></i> &nbsp;&nbsp;Map</a>
    <a href="issueslist.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;Issues List</a>
    <a href="adduser.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;Add User</a>
    <a href="userlist.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;User List</a>
    <a href="api/logout.php" class="icon-a"><i class="fa fa-sign-out"></i> &nbsp;&nbsp;Logout</a>
  </div>

  <div id="main">

    <div class="head">
      <div class="col-div-6 font-bold">
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav">&#9776; Dashboard</span>
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav2">&#9776; Dashboard</span>
      </div>

      <div class="col-div-6">
        <div class="profile">
          <img src="assets/img/CocoScan_logo.png" class="pro-img" />
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
      <div class="box-8" style="background-color:white">
        <div class="content-box">
          <br />
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>User Role</th>
                  <th>District</th>
                 
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="userTableBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

  <script>
  $(document).ready(function() {
   
    $.ajax({
      url: 'api/report.module.php',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        if (response.success) {
          
          $.each(response.user_districts, function(index, user) {

            $varmy = user.name;
            if($varmy==1){
              $varmy = "Super Admin";
            }
            else{
              $varmy = "Admin";
            }
            $('#userTableBody').append(
              '<tr>' +
              '<td style="color:black">' + user.username + '</td>' +
              '<td style="color:black">' + $varmy + '</td>' +
              '<td style="color:black">' + user.name + '</td>' +
              '<td><button class="delete-button" data-userid="' + user.user_id + '">Delete</button></td>' +
              '</tr>'
            );
          });
        } else {
          
          console.error(response.message);
        }
      },
      error: function(xhr, status, error) {
       
        console.error(error);
      }
    });

    $(document).on('click', '.delete-button', function() {
      var userId = $(this).data('userid');
      if (confirm('Are you sure you want to delete this user?')) {

        $.ajax({
          url: 'api/delete_user.php', 
          type: 'POST',
          dataType: 'json',
          data: { userId: userId },
          success: function(response) {
            if (response.success) {
             
              location.reload();
            } else {
              console.error(response.message);
            }
          },
          error: function(xhr, status, error) {
            console.error(error);
          }
        });
      }
    });
  });
</script>

  <!-- Bootstrap JS -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>
