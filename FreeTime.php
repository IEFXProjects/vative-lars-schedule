	<?php
	require 'functions2.php';
	sessionpage();
	retrieveUserInfo();
	UserSchedule($UniqueUser);
	$FreeTImeOption=$_POST['FreeTime'];
	$chooseActnum=$_Post['chooseActnum'];
	$chooseMH=$_Post['chooseMH'];

	$count=0;
	while($count<=$chooseActnum){
		$Act[$count]=array ($_POST['"Act" . ($count+1)'], $_POST['"time" . ($count+1)';
		$count=$count+1;
	}
	require 'functions2.php';
	sessionpage();
	retrieveUserInfo();
	$Act = mysqli_real_escape_string($conn, $Act);
	//converts form data to variables
	
	$servername = "localhost";
	$DBusername = "cl29-vative";
	$DBpassword = "f4V-NrKV8";
	$DBname = "cl29-vative";
	mysqli_close($conn2);
