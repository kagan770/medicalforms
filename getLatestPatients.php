<?php 
include_once 'mysql_connect.php';

$sql = "SELECT Patients.* FROM Patient Patients
join (SELECT MAX(Id) as maxId
      FROM `Patient` 
      GROUP BY `UserId`) LatestPatient
on LatestPatient.maxId = Patients.Id
ORDER BY Patients.LastName;";

$result = mysqli_query($con,$sql);
$patients = array();

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	//print_r($row);
	$patients[] = $row;
}	

?>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/select2/3.4.1/select2.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="span12">
				<button class="btn btn-large">New Patient</button>
			</div>
			<div class="span12">
				<select data-bind="
				options:patients, 
				optionsText:'DisplayName', 
				optionsValue:'Id'"></select>
			</div>
		</div>
	</div>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/knockout/2.2.1/knockout-min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/select2/3.4.1/select2.min.js"></script>
	<script type="text/javascript">
	function getAge(bd){
		var birthday = new Date(bd)

		var today = new Date()

		var difference = new Date(today-birthday)
		var age = difference / 1000 / 60 / 60 /24 /365;
		return Math.floor(age);
	}

	var patients = <?php echo json_encode($patients); ?>;

	$.each(patients, function(index, patient){
		var fullName = patient.LastName + ", " + patient.FirstName;
		var age = getAge(patient.BirthDate);
		patient.DisplayName = fullName + " " + age + "yrs old";

	});
	function viewModel(patients){
		this.patients = ko.observableArray(patients);
	}
	$(function(){
		vm = new viewModel(patients);
		ko.applyBindings(vm);
		$('select').select2();
	});
	
	console.log(patients);
	</script>
</body>
</html>

