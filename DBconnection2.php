<?php
	global $servername, $DBusername, $DBpassword, $DBname, $conn2;
	$servername = "localhost";
	$DBusername = "cl29-vative";
	$DBpassword = "f4V-NrKV8";
	$DBname = "cl29-vative";
	
	$conn2 = new mysqli($servername, $DBusername, $DBpassword, $DBname);
	//connects to the database based on the variables defined in the first lines
	if ($conn2->connect_error) {
     die("Connection failed: " . $conn2->connect_error);
	}
	else {
	}
?>

