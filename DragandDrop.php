<?php
include('connection.php');
$array=$_Post['listorder'];
if($_POST['update']=="order"){
$query="UPDATE dragdrop SET listnumber =" . $x ." WHERE id= " . $value;
mysql_query($query) or die(mysl_error());
$x ++;
}
echo 'Changes Saved';
}
?>
