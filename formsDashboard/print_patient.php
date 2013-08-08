<?php 

$id = $_GET['id'];
include_once '../mysql_connect.php';
$sql = sprintf("SELECT * FROM Patient WHERE Id=%s", 
               mysqli_real_escape_string($con, $id));
$result = mysqli_query($con,$sql);
$my_array = array();
if($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	$patient = $row;
}	

mysqli_close($con);
?>


<html>
<head>
	<title></title>
	<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css" rel="stylesheet">

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="span12" data-bind="with:patient">
				<h3><span data-bind="text:FirstName"></span> 
					<span data-bind="text:LastName"></span> -
					Submitted <span data-bind="text:TodaysDate"></span></h3>
					<table class="table table-bordered table-striped table-condensed" >
						<tr><td>Address</td><td data-bind="text:Address"></td></tr>
						<tr><td>City</td><td data-bind="text:City"></td></tr>
						<tr><td>State</td><td data-bind="text:State"></td></tr>
						<tr><td>Zip Code</td><td data-bind="text:ZipCode"></td></tr>
						<tr><td>Email</td><td data-bind="text:Email"></td></tr>
						<tr><td>Phone Number</td><td data-bind="text:PhoneNumber"></td></tr>
						<tr><td>Gender</td><td data-bind="text:Gender"></td></tr>
						<tr><td>Height</td><td data-bind="text:Height"></td></tr>
						<tr><td>Weight</td><td data-bind="text:Weight"></td></tr>
						<tr><td>Birth Date</td><td data-bind="text:BirthDate"></td></tr>
						<tr><td>Drug Allergies</td><td data-bind="text:DrugAllergies? DrugAllergies: 'none'"></td></tr>
						<tr><td>Medical Conditions</td><td data-bind="text:MedicalCondition? MedicalCondition: 'none'"></td></tr>
						<tr><td>Medications</td><td data-bind="text:Medications? Medications: 'none'"></td></tr>
						<tr><td>Other Medical Conditions</td><td data-bind="text:Other? Other: 'none'"></td></tr>
						<tr><td>Prior Surgeries</td><td data-bind="text:PriorSurgeries? PriorSurgeries: 'none'"></td></tr>
						<tr><td>Procedure</td><td data-bind="text:Procedure"></td></tr>
						<tr><td>Recieve Specials</td><td data-bind="text:RecieveSpecials? 'yes' : 'no'"></td></tr>
						<tr><td>Referral Source</td><td data-bind="text:ReferralSource"></td></tr>
						<tr><td>Signature Privacy</td><td><img data-bind="attr:{'src':SignaturePrivacy}"/></td></tr>
						<tr><td>Signature Terms</td><td><img data-bind="attr:{'src':SignatureTerms}"/></td></tr>
						<!-- <tr><td>TodaysDate</td><td data-bind="text:TodaysDate"></td></tr> -->
						<tr><td>Agent</td><td data-bind="text:Agent? Agent: 'none'"></td></tr>
						<tr><td>Title</td><td data-bind="text:Title? Title: 'none'"></td></tr>
					</table>
				</div>
			</div>
		</div>
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js" ></script>
		<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap.min.js" ></script>

		<script type="text/javascript">
		var patient = <?php echo json_encode($patient); ?>;
		function viewModel(patient){
			this.patient = ko.observable(patient);
		}
		vm = new viewModel(patient)
		ko.applyBindings(vm);
		console.log(patient);
		</script>
	</body>
	</html>