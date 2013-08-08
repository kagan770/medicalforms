<?php 
include_once '..mysql_connect.php';
$sql = 'SELECT COUNT(*) AS num FROM `Patient`';
$data = mysqli_query($con, $sql);

// A COUNT query will always return 1 row
// (unless it fails, in which case we die above)
// Use fetch_assoc for a nice associative array - much easier to use
$row = mysqli_fetch_assoc($data);

// Get the number of uses from the array
// 'num' is what we aliased the column as above
$numPatients = $row['num'];
echo $numPatients;

mysqli_close($con);
 ?>