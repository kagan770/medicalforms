<?php 


$data = json_decode(file_get_contents('php://input'));
include_once '../mysql_connect.php';
function createattachment($con, $data){
	$date = date("U");
	$userId = $data->UserId;
	$label = $data->Label;
	$filename = $date.$label;

	$sql = sprintf("INSERT INTO  `attachment` (  
	               `UserId` , 
	               `Label`,
	               `Filename`
	               ) 
	VALUES (
        '%s',
        '%s',
        '%s'
        )",
	mysqli_real_escape_string($con, $userId),
	mysqli_real_escape_string($con, $label),
	mysqli_real_escape_string($con, $filename));
	echo $sql;
	mysqli_query($con, $sql);

}

createattachment($con, $data);
mysqli_close($con);
?>
