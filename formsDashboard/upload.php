<?php
$output_dir = "uploads/";
$label = $_FILES["myfile"]["name"];
$userId = $_POST['UserId'];

if(isset($_FILES["myfile"]))
{
    //Filter the file types , if you want.
    if ($_FILES["myfile"]["error"] > 0)
    {
      echo "Error: " . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
        //move the uploaded file to uploads folder;
        move_uploaded_file($_FILES["myfile"]["tmp_name"],$output_dir. $_FILES["myfile"]["name"]);
 
     echo "Uploaded File :".$output_dir. $_FILES["myfile"]["name"];
    }
 
}

//Insert row for file in db
$data = json_decode(file_get_contents('php://input'));
include_once '../mysql_connect.php';
function createattachment($con, $userId, $label){
	$date = date("U");
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

createattachment($con, $userId, $label);
mysqli_close($con);
?>
