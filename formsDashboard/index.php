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
                            <!--ko foreach:columns -->
                            <th data-bind="text:$data"></th>
                            <!-- /ko -->
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody data-bind="foreach:rows">
                        <tr data-bind="attr:{id:$data[0]}, click:$root.getRowId">
                            <!--ko foreach:$data -->
                            <td data-bind="text:$data"></td>
                            <!-- /ko -->
                            <td><a class="btn btn-red" data-bind="attr:{'href':'print_patient.php?id=' + $data[0]}">Report</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- <textarea data-bind="text:ko.toJSON($root)"></textarea> -->
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js" ></script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js" ></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/datatables/1.9.4/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="js/viewModel.js"></script>
<script type="text/javascript">
$(function(){
    getPatients(function(patients){
        vm = new viewModel(patients);
        ko.applyBindings(vm);
        $("table").dataTable({
            "bAutoWidth": false,
            "bStateSave": true
        });

        vm.rows.subscribe(function(){
            if(vm.rows().length){
                $.each(vm.rows(), function(){
                    $("table").dataTable().fnDeleteRow(0);
                });
                $("table").dataTable().fnDestroy();
            }
        }, null, 'beforeChange');
        vm.rows.subscribe(function(){
            if(vm.rows().length){
                $("table").dataTable({
                    "bAutoWidth": false,
                    "bStateSave": true
                });
            }

        });
        setInterval(function(){
            $.ajax({
                url:'getNumPatients.php',
                success:function(numPatients){
                    console.log(numPatients);
                    if(numPatients != vm.numPatients()){
                        getPatients(function(patients){
                            alert("new patient");
                            vm.patients(patients);
                            vm.numPatients(numPatients);
                        })
                    }
                }
            });
        }, 5000)
    });
});
</script>
</body>
</html>
