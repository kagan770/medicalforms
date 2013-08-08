<?php 
include_once '../mysql_connect.php';

$result = mysqli_query($con,"SELECT * FROM Patient");
$my_array = array();
while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    $my_array[] = $row;
}	
$data = $my_array;
echo json_encode($data);

mysqli_close($con);
 ?>