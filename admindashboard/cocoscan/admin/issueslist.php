
<?php

session_start();


if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.php");
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
  <link rel="stylesheet" href="../assets/css/style.css" type="text/css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    .call-button {
      background-color: #3ab54b;
      /* Green background color */
      color: #ffffff;
      /* White text color */
      padding: 8px 12px;
      border-radius: 4px;
      text-decoration: none;
      /* Remove underline */
    }

    .call-button:hover {
      background-color: #2d8f3e;
      /* Darker green color on hover */
    }
  </style>
</head>

<body>

  <div id="mySidenav" class="sidenav">
    <img src="../assets/img/CocoScan_logo.png" class="w-40 mb-10 mx-auto">
    <a href="index.php" class="icon-a font-bold"><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
    <a href="map.php" class="icon-a"><i class="fa fa-question"></i> &nbsp;&nbsp;Map</a>
    <a href="issueslist.php" class="icon-a"><i class="fa fa-tasks"></i> &nbsp;&nbsp;Issues List</a>

    <a href="../api/logout.php" class="icon-a"><i class="fa fa-sign-out"></i> &nbsp;&nbsp;Logout</a>
  </div>

  <div id="main">

    <div class="head">
      <div class="col-div-6 font-bold">
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav">&#9776; Issues List</span>
        <span style="font-size:30px;cursor:pointer; color: rgb(0, 0, 0);" class="nav2">&#9776;  Issues List</span>
      </div>

      <div class="col-div-6">
        <div class="profile">
          <img src="../assets/img/CocoScan_logo.png" class="pro-img" />
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
          <div class="mt-4">
        <button id="exportCSV" class="btn btn-primary" style="color:white; background-color:#3ab54b; border:none">Export as CSV</button>
        <br><br>
      </div>
          <div class="table-responsive">
          <table class="table table-striped" id="dataTable">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
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
  $(document).ready(function() {
   
    $.ajax({
        url: '../api/caselist1.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
          if (response.success) {
            var table = $('#dataTable tbody');
            $.each(response.locations, function (index, location) {
              table.append('<tr>' +
                '<td style="color:black">' + location.name + '</td>' +
                '<td style="color:black">' + location.mobile + '</td>' +
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



$('#exportCSV').click(function() {
    var csv = [];
    var rows = $('#dataTable tbody tr');

    rows.each(function() {
        var row = [];
        $(this).find('td:not(:last-child)').each(function() { 
            row.push($(this).text());
        });
        csv.push(row.join(','));
    });

    var csvContent = 'data:text/csv;charset=utf-8,';
    csv.forEach(function(row) {
        csvContent += row + '\r\n';
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'table_data.csv');
    document.body.appendChild(link);
    link.click();
});

</script>

  <!-- Bootstrap JS -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

</body>

</html>
