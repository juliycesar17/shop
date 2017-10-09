<!DOCTYPE html>
<html lang="ru" ng-app="myExp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
  <script src="//unpkg.com/angular-ui-router/release/angular-ui-router.min.js"></script>
<meta charset="windows-1251">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"></script>
<style>
html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
.w3-sidenav a,.w3-sidenav h4 {font-weight:bold}
</style>
<base href="/ice_an/" />
<title>{{title}}</title>
</head>

<body class="w3-light-grey w3-content" style="max-width:1600px" ng-controller="main">
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay">
</div>


    <fornav></fornav>

<div class="w3-main" style="margin-left:300px">

    <forheader></forheader>

    <ui-view></ui-view>

    <forfooter></forfooter>

</div>


<script src="modules/navigation/navModule.js?<?php echo date('h:i:sa');?>"></script>
<script src="modules/content/contentModule.js?<?php echo date('h:i:sa');?>"></script>
<script src="modules/footer/footerModule.js?<?php echo date('h:i:sa');?>"></script>
<script src="modules/header/headerModule.js?<?php echo date('h:i:sa');?>"></script>
<!--<script src="modules/cart/cartService.js?<?php echo date('h:i:sa');?>"></script>-->
<script src="modules/cart/cartModule.js?<?php echo date('h:i:sa');?>"></script>
<script src="js/app.js?<?php echo date('h:i:sa');?>"></script>
<script src="js/directives.js?<?php echo date('h:i:sa');?>"></script>
<script src="js/filters.js?<?php echo date('h:i:sa');?>"></script>
<script>
function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"/>
</body>
</html>
