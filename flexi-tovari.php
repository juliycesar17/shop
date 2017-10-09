<?php
session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
mysqli_set_charset($dbc,"utf8");
$_SESSION['q'] = $_POST['brand'];
$_SESSION['vid'] = $_POST['vid'];

//=================================
$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);
//==================================
$query="select *  from items where ice_cream='".$_POST['vid']."'  and enterprise='".$_POST['brand']."' limit 0, 5";
$result=mysqli_query($dbc, $query)
or die('errorBD');
if(isset($_POST['brand'])) {
$ppp=[
 "sess_vid"=>$_SESSION['vid'],
  "sess_qqq"=> $_SESSION['q']
 ];
  $resp=array();
  while($row=mysqli_fetch_array($result)){
      $resp[]=$row;
  }
  header('Content-Type: application/json');
	$end_ar=[
"pp"=>$ppp,
"resppp"=>$resp
];
 echo json_encode($end_ar);
mysqli_close($dbc);} else {require('flexi-tovari-without-post.php');}
?>
