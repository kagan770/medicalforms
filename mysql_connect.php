<?php // Create connection
$con=mysqli_connect("db479275359.db.1and1.com","dbo479275359","sple770","db479275359");
//$con=mysqli_connect("localhost","root","root","medicalForms");
// Check connection
if (mysqli_connect_errno($con))
{
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
} ?>