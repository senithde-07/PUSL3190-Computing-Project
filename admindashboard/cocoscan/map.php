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
    <title>Dashboard - Map</title>
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
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
        <a href="map.php" class="icon-a font-bold"><i class="fa fa-map"></i> &nbsp;&nbsp;Map</a>
        <a href="issueslist.php" class="icon-a"><i class="fa fa-question"></i> &nbsp;&nbsp;Issues List</a>
        <a href="adduser.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;Add User</a>
        <a href="userlist.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;User List</a>
        <a href="api/logout.php" class="icon-a"><i class="fa fa-sign-out"></i> &nbsp;&nbsp;Logout</a>
    </div>

    <div id="main">
        <div class="head">
            <div class="col-div-6 font-bold">
                <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav">&#9776; Locations Map</span>
                <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav2">&#9776; Locations Map</span>
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
     
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Issue Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="category">Issue:</label>
                    <input type="text" class="form-control" id="category" readonly>
                </div>
                <div class="form-group">
                    <label for="note">Note:</label>
                    <textarea class="form-control" id="note" rows="4" readonly></textarea>
                </div>
            </div>
        </div>
    </div>
</div>


        <div class="col-div-12">
            <div class="box-8">
                <div class="content-box">
                    <div id="map"></div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="mt-4 ml-4">
            <button id="zoomSriLanka" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Zoom to Sri Lanka
            </button>
            <button id="satelliteView" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Satellite View
            </button>
        </div>
    </div>

    <!-- Include Leaflet JS -->
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
  $(document).ready(function () {

    var map = L.map('map').setView([7.8731, 80.7718], 7);

    var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);


    var satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Fetch data from API and add markers to the map
    $.getJSON('api/map.module.php', function (data) {
        data.locations.forEach(function (location) {
            var marker = L.marker([location.lan, location.lon]).addTo(map);
            
            marker.bindPopup(location.category == 1 ? "Black Beetle Damage" : "Red Beetle Damage").on('click', function () {
                $myval = location.catgeory;

                if($myval == 1){
                    $my = "Red Beetle Damage";
                    $('#category').val("Red Beetle Damage");
                }
                else{
                    $('#category').val("Black  Beetle Damage");
                }
               
                $('#note').text(location.note);
                $('#myModal').modal('show');
            });
        });
    });


    $('#zoomSriLanka').click(function () {
        map.setView([7.8731, 80.7718], 7);
    });

    
    $('#satelliteView').click(function () {
        if (map.hasLayer(satelliteLayer)) {
            map.removeLayer(satelliteLayer);
        } else {
            map.addLayer(satelliteLayer);
        }
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
});

    </script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</body>

</html>
