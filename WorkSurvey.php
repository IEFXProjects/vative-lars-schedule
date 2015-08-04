<?php
	require 'functions2.php';
	sessionpage();
	retrieveUserInfo();
	UserSchedule($UniqueUser);
	$chooseActnum=$_Post[chooseActnum];
	print_r($chooseActnum);
	
	$Act= array();
	$count=0;
	while($count<=$chooseActnum){
		$variable2= "time" . ($count+1);
		$variable3= "chooseMH" . ($count+1);
		$Act[$count]= array($_POST[$variable1], $_POST[$variable2], $_POST[$variable3]);
		array_push($Meals, $Act[$count]);
		$count=$count+1;
	}
	
	require 'DBconnection2.php';
	$count=0;
	while ($count<=$chooseActnum) {
		$count2=0;
		while ($count2<=2) {
			$Act[$count][$count2] = mysqli_real_escape_string($conn2, $Act[$count][$count2]);
			$count2= $count2+1;
		}
		$count= $count+1;
	}
	serialize($Act);
	$sql="INSERT INTO Events(Act) VALUES('$Act') WHERE Username= '$UniqueUser'";
	if ($conn2->query($sql)){
		mysqli_close($conn2);
		header("Location:https://web125.secure-secure.co.uk/peerphinder.com/schedule/home.html");
	}
	else{
	die("Connection failed dummy" . $conn2->connect_error);
	}
	//converts form data to variables
	
	?>
