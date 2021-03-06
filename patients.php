<?php 

$action = $_GET['act'];
$id = $_GET['Id'];
$data = json_decode(file_get_contents('php://input'));
include_once 'mysql_connect.php';
switch ($action) {
	case 'createpatient':
	$id = createpatient($con, $data);
	echo $id;
	break;
	case 'loadpatient':
	echo loadpatient($con, $id);
	break;
	case 'updatepatient':
	updatepatient($con, $data);
	break;
	case 'erasepatient':
	erasepatient($con, $data);
	break;
	default:
		# code...
	break;
}

function createpatient($con, $data){
	$userId = $data->UserId;
	$height = $data->Height;
	$weight = $data->Weight;
	$gender = $data->Gender;
	$procedure = $data->Procedure;
	$recieveSpecials = $data->RecieveSpecials;
	$signature = $data->Signature;
	$address = $data->Address;
	$agent = $data->Agent;
	$birthDate = date("m/d/Y", $data->BirthDate);
	$city = $data->City;
	$confirm = $data->Confirm;
	$drugAllergies = $data->DrugAllergies;
	$email = $data->Email;
	$firstName = $data->FirstName;
	$gender = $data->Gender;
	$height = $data->Height;
	$id = $data->Id;
	$lastName = $data->LastName;
	$medicalCondition = implode(",", $data->MedicalCondition);
	$medications = $data->Medications;
	$other = $data->Other;
	$phoneNumber = $data->PhoneNumber;
	$priorSurgeries = $data->PriorSurgeries;
	$signaturePrivacy = $data->Privacy;
	$procedure = $data->Procedure;
	$referralSource = implode(",", $data->ReferralSource);
	$state = $data->State;
	$signatureTerms = $data->Terms;
	$title = $data->Title;
	$todaysDate = $data->TodaysDate;
	$weight = $data->Weight;
	$zipCode = $data->ZipCode;
	$printedStatus = "false";
	$todaysDate = date("m/d/Y g:i a");
	$sql = sprintf("INSERT INTO  `Patient` (  
	               `Id` ,
	               `UserId` , 
	               `FirstName` ,
	               `LastName` ,
	               `Address` ,
	               `City` ,
	               `State` ,
	               `ZipCode` ,
	               `PhoneNumber` ,
	               `Email` ,
	               `BirthDate` ,
	               `TodaysDate` ,
	               `Age` ,
	               `Height` ,
	               `Weight` ,
	               `Gender` ,
	               `Procedure` ,
	               `ReferralSource`,
	               `RecieveSpecials` ,
	               `DrugAllergies` ,
	               `Other` ,
	               `Medications` ,
	               `PriorSurgeries` ,
	               `MedicalCondition` ,
	               `Confirm` ,
	               `Agent` ,
	               `Title` ,
	               `SignaturePrivacy` ,
	               `SignatureTerms` ,
	               `PrintedStatus` ) 
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
mysqli_real_escape_string($con, $userId),
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
mysqli_real_escape_string($con, $referralSource),
mysqli_real_escape_string($con, $recieveSpecials),
mysqli_real_escape_string($con, $drugAllergies),
mysqli_real_escape_string($con, $other),
mysqli_real_escape_string($con, $medications),
mysqli_real_escape_string($con, $priorSurgeries),
mysqli_real_escape_string($con, $medicalCondition),
mysqli_real_escape_string($con, $confirm),
mysqli_real_escape_string($con, $agent),
mysqli_real_escape_string($con, $title),
mysqli_real_escape_string($con, $signaturePrivacy),
mysqli_real_escape_string($con, $signatureTerms),
mysqli_real_escape_string($con, $printedStatus));

$result = mysqli_query($con,$sql);
return mysqli_insert_id($con);
}
function loadpatient($con,$id){
	$sql = sprintf("SELECT * FROM `Patient` WHERE id = %s", 
	               mysqli_real_escape_string($con, $id));
	//echo $sql;
	$result = mysqli_query($con,$sql);
	$my_array = array();
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
		$my_array[] = $row;
	}	
	return json_encode($my_array);
}
function updatepatient($con, $data){
	$printedStatus = $data->PrintedStatus;
	$id = $data->Id;
	$sql = sprintf("UPDATE  `Patient` 
	               SET `PrintedStatus` = '%s'
	               WHERE  `Id` = %s ",

	               mysqli_real_escape_string($con, $printedStatus),
	               mysqli_real_escape_string($con, $id));
	echo $sql;
	$result = mysqli_query($con,$sql);

}
function erasepatient($con, $data){

}

mysqli_close($con);
?>