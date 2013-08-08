<?php 
include_once 'mysql_connect.php';

$sql = "SELECT DISTINCT(`UserId`) FROM `Patient`";
$result = mysqli_query($con,$sql);

$uniqueUserIds = array();
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
	//print_r($row);
	$uniqueUserIds[] = $row['UserId'];
}	

print_r($uniqueUserIds);

?>