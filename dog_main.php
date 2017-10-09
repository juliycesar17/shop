<?php 
session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");
$query44="select  ice_cream.vse_vidi_tov,ice_cream.func, ice_cream.urll, ice_cream.image, SUBSTRING_INDEX(GROUP_CONCAT( distinct enterpr_ice_cr.brend 
ORDER BY enterpr_ice_cr.brend  
ASC SEPARATOR ', '  ), ',',4) AS brends FROM ice_cream
 LEFT JOIN enterpr_ice_cr ON 
ice_cream.vse_vidi_tov=enterpr_ice_cr.vse_vidi_tov group by ice_cream.vse_vidi_tov  limit 0, 8";
$result44=mysqli_query($dbc, $query44)
or die('errorBD44i');
if(isset($_POST['text'])){
		  $resp=array();
			while( $row44=mysqli_fetch_assoc($result44) ) {								  
$resp[]=$row44; 
                                                      }
header('Content-Type: application/json');	
	 $end_ar=[ 
"resppp"=>$resp
             ];  
//print_r( $end_ar);			 
    echo json_encode($end_ar);		
	mysqli_close($dbc);} 
	else {require_once ('dog_main_without_post.php');}
	?>

