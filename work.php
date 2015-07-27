<?php	
	require 'functions2.php';
	sessionpage();
	retrieveUserInfo();
	UserSchedule($UniqueUser);
	$Work= $_POST[Work];
	$halftime= $_POST[halftime2];
	$Snacks= $_POST[Snacks];
	$image= $_POST[image];
	//converts form data to variables
	

	//tests to see if the user inputed a valid email...if they did it will do nothing...if they did not it will end the script
	//all of the if statements test to make sure the user inputed the form data correctly
	
	$servername = "localhost";
	$DBusername = "cl29-vative";
	$DBpassword = "f4V-NrKV8";
	$DBname = "cl29-vative";
	
	
	
	$username = mysqli_real_escape_string($conn, $username);
	$Work = mysqli_real_escape_string($conn, $Work);

	mysqli_close($conn2);
