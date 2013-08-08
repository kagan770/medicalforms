<?php 

$method = $_SERVER['REQUEST_METHOD'];

$action = $_GET['act'];
$request_body = file_get_contents('php://input');
print_r($request_body);
$file=fopen("log.txt","w");
file_put_contents("log.txt",$action." method = ".$method."\nRequest Body = ".$request_body);
fclose($file);

//echo '{"drugAllergies":"","id":555,"lastName":"","todaysDate":null,"address":"","city":"","state":"","zipCode":"","phoneNumber":"","email":"","other":"other ","medications":"","priorSurgeries":"","firstName":"Bradley","birthDate":null,"height":"","weight":null,"referralSource":[],"medicalCondition":[],"gender":"","procedure":"","privacy":"","agent":"","title":"","terms":"","confirm":""}';
 ?>