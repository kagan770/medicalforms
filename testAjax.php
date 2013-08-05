<?php 
$procedure = $_POST['procedure'];
$referralSource = $_POST['referralSource'];


include_once 'mysql_connect.php';

$patientId = savePatientInfo($con,$_POST);
saveMedicalHistory($con, $_POST, $patientId);

mysqli_close($con);




/*Functions*/
function saveMedicalHistory($con, $data, $patientId){
	$medicalCondition = $data['medicalCondition'];
	$otherMedicalCondition = $data['otherMedicalCondition'];
	$priorSurgeries = $data['priorSurgeries'];
	$drugAllergies = $data['drugAllergies'];
	$medications = $data['medications'];
	insertMedicalHistory($con, $patientId, 'otherMedicalCondition', $otherMedicalCondition);
	insertMedicalHistory($con, $patientId, 'priorSurgeries', $priorSurgeries);
	insertMedicalHistory($con, $patientId, 'drugAllergies', $drugAllergies);
	insertMedicalHistory($con, $patientId, 'medications', $medications);
	foreach ($medicalCondition as $key => $value) {
		if($value){
			insertMedicalHistory($con, $patientId, $value, 'true');
		}
	}
}
function insertMedicalHistory($con, $patientId, $type, $description){
	$sql = sprintf("INSERT INTO  `MedicalHistory` (  
			               `Id`,
			               `PatientId` ,  
			               `Type` ,  
			               `Description` ) 
			VALUES ('',
			        '%s',  
			        '%s',  
			        '%s')", 
			mysqli_real_escape_string($con, $patientId),  
			mysqli_real_escape_string($con, $type),  
			mysqli_real_escape_string($con, $description));
			
			$result = mysqli_query($con,$sql);
}
function savePatientInfo($con,$data) {
	$firstName = $data['firstName'];
	$lastName = $data['lastName'];
	$address = $data['address'];
	$city = $data['city'];
	$state = $data['state'];
	$zipCode = $data['zipCode'];
	$phoneNumber = $data['phoneNumber'];
	$email = $data['email'];
	$birthDate = $data['birthDate'];
	$todaysDate = date("m/d/Y");
	$age = $data['age'];
	$height = $data['height'];
	$weight = $data['weight'];
	$gender = $data['gender'];
	$procedure = $data['procedure'];
	$recieveSpecials = $data['recieveSpecials'];
	$signature = $data['signature'];
	$sql = sprintf("INSERT INTO  `Patient` (  
	               `Id`,
	               `FirstName`,
	               `LastName`,
	               `Address`,
	               `City`,
	               `State`,
	               `ZipCode`,
	               `PhoneNumber`,
	               `Email`,
	               `BirthDate`,
	               `TodaysDate`,
	               `Age`,
	               `Height`,
	               `Weight`,
	               `Gender`,
	               `Procedure`,
	               `RecieveSpecials`,
	               `Signature`) 
VALUES (
        '',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s',
        '%s'
        )",
	mysqli_real_escape_string($con, $firstName),
	mysqli_real_escape_string($con, $lastName),
	mysqli_real_escape_string($con, $address),
	mysqli_real_escape_string($con, $city),
	mysqli_real_escape_string($con, $state),
	mysqli_real_escape_string($con, $zipCode),
	mysqli_real_escape_string($con, $phoneNumber),
	mysqli_real_escape_string($con, $email),
	mysqli_real_escape_string($con, $birthDate),
	mysqli_real_escape_string($con, $todaysDate),
	mysqli_real_escape_string($con, $age),
	mysqli_real_escape_string($con, $height),
	mysqli_real_escape_string($con, $weight),
	mysqli_real_escape_string($con, $gender),
	mysqli_real_escape_string($con, $procedure),
	mysqli_real_escape_string($con, $recieveSpecials),
	mysqli_real_escape_string($con, $signature));

$result = mysqli_query($con,$sql);
return mysqli_insert_id($con);
}
?>