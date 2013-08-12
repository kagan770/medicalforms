<?php 
include_once '../mysql_connect.php';

$sql = "SELECT Patients.* FROM Patient Patients
join (SELECT MAX(Id) as maxId
      FROM `Patient` 
      GROUP BY `UserId`) LatestPatient
on LatestPatient.maxId = Patients.Id
ORDER BY Patients.Id DESC;";

$result = mysqli_query($con,$sql);
$my_array = array();
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $my_array[] = $row;
}	
$data = $my_array;
echo json_encode($data);

mysqli_close($con);
 ?>