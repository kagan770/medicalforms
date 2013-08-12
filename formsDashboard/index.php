<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800">
	<link href="stylesheets/application.css" media="screen" rel="stylesheet" type="text/css" />

	<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
	<meta charset="utf-8">
	<!-- Always force latest IE rendering engine or request Chrome Frame -->
	<!--  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"> -->
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
    td, th{
        white-space: nowrap;
    }
    table.datatable tr.even:hover,
    table.datatable tr.odd:hover
    {
        background: #6db5d5;
        cursor: pointer;
    }
    </style>
</head>
<body>
   <div class="main-content" style="margin-left: 0">
    <div class="container-fluid padded">
        <div class="row-fluid">

            <div class="area-top clearfix">
                <div class="pull-left header">
                    <h3 class="title">
                        <i class="icon-bar-chart"></i>
                        Medical Forms Dashboard
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid padded">
        <div class="row-fluid">
            <div class="span12">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Date of Visit</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Procedure</th>
                            <th>Attachments</th>
                            <th>Printed</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody data-bind="foreach:patients">
                        <tr data-bind="attr:{id:Id}, click:$root.getRowId">

                            <td data-bind="text: Id"></td>
                            <td data-bind="text: LastName"></td>
                            <td data-bind="text: FirstName"></td>
                            <td data-bind="text: TodaysDate"></td>
                            <td data-bind="text: Address"></td>
                            <td data-bind="text: Email"></td>
                            <td data-bind="text: Age"></td>
                            <td data-bind="text: Gender"></td>
                            <td data-bind="text: PhoneNumber"></td>
                            <td data-bind="text: Procedure"></td>
                            <td>
                                <form data-bind="attr:{'id':'fileupload' + $index()}" class="fileupload" action="upload.php" method="post" enctype="multipart/form-data">
                                   <input type="file" name="myfile">
                                   <!-- <input type="submit" value="Ajax File Upload"> -->
                                   <input type="hidden" name="UserId" data-bind="value:UserId"/>
                               </form>
                           </td>
                           <td><input type="checkbox" class="printed_status" data-bind="value:PrintedStatus"></td>
                           <td><a class="btn btn-red" data-bind="attr:{'href':'print_patient.php?id=' + Id}">Report</a></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
   </div>
</div>
<style>
#fileupload { display: block; margin: 20px auto; background: #eee; border-radius: 10px; padding: 15px }
#progress { position:relative; width:400px; border: 1px solid #ddd; padding: 1px; border-radius: 3px; }
#bar { background-color: #B4F5B4; width:0%; height:20px; border-radius: 3px; }
#percent { position:absolute; display:inline-block; top:3px; left:48%; }
</style>
<form id="fileupload" action="upload.php" method="post" enctype="multipart/form-data">
   <input type="file" name="myfile">
   <input type="submit" value="Ajax File Upload">
</form>
<div id="progress">
    <div id="bar"></div>
    <div id="percent">0%</div >
    </div>
    <br/>

    <div id="message"></div>
    <!-- <textarea data-bind="text:ko.toJSON($root)"></textarea> -->
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js" ></script>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js" ></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/datatables/1.9.4/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.form/3.32/jquery.form.js"></script>
    <script type="text/javascript" src="js/viewModel.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>
