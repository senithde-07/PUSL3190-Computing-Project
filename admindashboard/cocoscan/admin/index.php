<?php

session_start();


if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
    exit; 
}
?>

<!DOCTYPE html>
<html>

<head>
  <title>Dashboard</title>
  <link rel="stylesheet" href="../assets/css/style.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    .call-button {
      background-color: #3ab54b;
      color: #ffffff;
      border-radius: 4px;
      padding: 8px 12px;
      text-decoration: none;
    }

    .call-button:hover {
      background-color: #2d8f3e;
    }
  </style>
</head>

<body>

  <div id="mySidenav" class="sidenav">
    <img src="../assets/img/CocoScan_logo.png" class="w-40 mb-10 mx-auto">
    <a href="index.php" class="icon-a font-bold"><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
    <a href="map.php" class="icon-a"><i class="fa fa-map"></i> &nbsp;&nbsp;Map</a>
    <a href="issueslist.php" class="icon-a"><i class="fa fa-question"></i> &nbsp;&nbsp;Issues List</a>

    <a href="../api/logout.php" class="icon-a"><i class="fa fa-sign-out"></i> &nbsp;&nbsp;Logout</a>
  </div>

  <div id="main">

    <div class="head">
      <div class="col-div-6 font-bold">
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav">&#9776; Dashboard</span>
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav2">&#9776; Dashboard</span>
      </div>

      <div class="col-div-6">
        <div class="profile">
          <img src="../assets/img/user.png" class="pro-img" />
          <p>Admin<span>COCO</span></p>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="clearfix"></div>
    <br />

    <div class="col-div-4">
      <div class="box">
        <p><span id="ip_count" style="font-size: 35px;
  color: white;
  font-weight: bold;
  line-height: 30px;"></span><br /><span>Daily Usage</span></p>
       
      </div>
    </div>
    
    <div class="col-div-4">
      <div class="box">
        <p><span id="red_beetle_count" style="font-size: 35px;
  color: white;
  font-weight: bold;
  line-height: 30px;"></span><br /><span>Red Beetle Damage</span></p>
    
      </div>
    </div>
    <div class="col-div-4">
      <div class="box">
        <p><span id="black_beetle_count" style="font-size: 35px;
  color: white;
  font-weight: bold;
  line-height: 30px;"></span><br /><span>Black Beetle Damage</span></p>
        
      </div>
    </div>
    <div class="clearfix"></div>
    <br /><br />
    <div class="col-div-12">
      <div class="box-8" style="background-color:white">
        <div class="content-box">
          <p>Lastest Reports</p>
          <br />
          <table class="table table-striped" id="dataTable">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Issue</th>
                <th>Districts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>

    
    </div>

    <div class="clearfix"></div>
  </div>


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script>
    $(document).ready(function () {
     
      $.ajax({
        url: '../api/count1.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          console.log(response);
          if (response.success) {
            $('#red_beetle_count').text(response.counts.category_1);
          $('#black_beetle_count').text(response.counts.category_2);
          } else {
            console.error('Failed to fetch counts');
          }
        },
        error: function (xhr, status, error) {
          console.error('Error:', error);
        }
      });
      $.ajax({
        url: '../api/visitcount1.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          console.log(response);
          if (response.success) {
            $('#ip_count').text(response.daily_count);
         
          } else {
            console.error('Failed to fetch counts');
          }
        },
        error: function (xhr, status, error) {
          console.error('Error:', error);
        }
      });

     
      $.ajax({
        url: '../api/caselist1.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          console.log(response);
          if (response.success) {
            var table = $('#dataTable tbody');
            $.each(response.locations, function (index, location) {
              table.append('<tr>' +
                '<td style="color:black">' + location.name + '</td>' +
                '<td style="color:black">' + location.category_name + '</td>' +
                '<td style="color:black">' + location.district_name + '</td>' +
                '<td><a href="tel:' + location.mobile + '" class="action-button call-button">Call</a></td>' +
                '</tr>');
            });
          } else {
            console.error('Failed to fetch data');
          }
        },
        error: function (xhr, status, error) {
          console.error('Error:', error);
        }
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
