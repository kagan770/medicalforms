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
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/select2/3.4.1/select2.min.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="span12">
				<h2 style="text-align:center">Michigan Cosmetic Surgery Center Intake Form</h2>
			</div>
			<div class="span12" style="text-align:center">
				<a class="btn btn-large" href="http://parallelable.com/medicalForms/form.html#newPatient/">New Patient >></a>
			</div>
			<div class="span12" style="text-align:center">
				<h4>Or Existing Patient:</h4>
				<select data-bind="
				options:patients, 
				optionsText:'DisplayName', 
				optionsValue:'Id',
				value:patientId" sytle="width:250px"></select>
			</div>
			<div class="span12" data-bind="visible:patientId() != '-1'" style="text-align:center; margin-top:15px;">
				<a class="btn btn-large" data-bind="attr:{href:existingPatientURL}">Extisting Patient >></a>
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
	patients.unshift({Id:"-1", DisplayName: '--Please Select an Existing Patient--'})
	function viewModel(patients){
		var self = this;
		self.patients = ko.observableArray(patients);
		self.patientId = ko.observable();
		self.existingPatientURL = ko.computed(function(){
			return "http://parallelable.com/medicalForms/form.html#user/" + self.patientId();
		});
	}
	$(function(){
		vm = new viewModel(patients);
		ko.applyBindings(vm);
		$('select').select2({
			width:'275px'
		});
	});
	
	console.log(patients);
	</script>
</body>
</html>

