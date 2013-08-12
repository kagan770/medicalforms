<?php 
$id = $_GET['id'];
include_once '../mysql_connect.php';

$sql = sprintf("SELECT * FROM attachment WHERE Id=%s", 
			mysqli_real_escape_string($con, $id));



$result = mysqli_query($con,$sql);
$my_array = array();
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $my_array[] = $row;
}	
print_r($my_array);
mysqli_close($con);
?>