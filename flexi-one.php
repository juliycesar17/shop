<?php session_start();
$dbc=mysqli_connect('vasiliy7.mysql.ukraine.com.ua','vasiliy7_iceb','vasiliy_iceb','vasiliy7_ice3')
or die('error_mysql');
$q = $_POST['id'];
mysqli_set_charset($dbc,"utf8");
$query="select *  from items where id='".$q."'";
$result=mysqli_query($dbc, $query)
or die('errorBD55');

//if(empty($_SESSION['flexi_one'])) {          //если открыли сразу через новую вкладку - то сюда ничего не попадет!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//$_SESSION['flexi_one']= $q;}
$_SESSION['flexi_one']= $q;
if(isset($_POST['id'])){

//$_SESSION['flexi_one']=$_POST['q'];
$pp=[
 "sess_one"=>$_SESSION['flexi_one']

 ];
         $resp=array();
			while( $row55=mysqli_fetch_assoc($result) )
			{
$resp[]=$row55;
  }

header('Content-Type: application/json');
$end_ar=[
"id"=>$pp,
"resppp"=>$resp
];

 echo json_encode($end_ar);
 mysqli_close($dbc);  }    else {  require_once('get-flexi-one-without-post.php');}?>
