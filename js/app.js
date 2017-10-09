var myExp=angular.module("myExp", ['ui.router', 'header', 'footer','content', 'navigation', 'cartshop'])
.run(function ($rootScope) {
$rootScope.mes = [];
}).config(function($stateProvider, $locationProvider, $provide) {

 $locationProvider.html5Mode(true);

  var helloState = {
    name: 'hello',
    url: '/',
    template: '<main></main>'
  };
  $stateProvider.state(helloState);
 //==============================
 var fornav = {
   name: 'fornavname',
   url: '/shop',
   template: '<dogmain></dogmain>'
 };
 $stateProvider.state(fornav);
 //---------------------------
 var forflexi = {
   name: 'forflexiname',
   url: '/select-cat/:vid',
   controller: function($scope, $rootScope, $stateParams, $http) {
     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
     //var payload =  {vid:$stateParams.vid };
    // console.log(payload);
      var payload = $.param({ 'vid':$stateParams.vid });
     $http.post("flexi.php", payload).then(function successget(response){
     $scope.data.pitems=response.data;
     }).catch(function(err){console.log(err)});
    $rootScope.vvv = $stateParams.vid;
    $scope.vid = $stateParams.vid;
  },
   template: '<flexi></flexi>'
 };
 $stateProvider.state(forflexi);
 //==================================
 var forcart = {
   name: 'forcartname',
   url: '/cart',
   controller: function($scope, $rootScope, cart) {
     $scope.cart = cart.getProducts();
     $scope.total = function () {
       var total = 0;
       for (var i = 0; i < cartData.length; i++) {
         total+= (cartData[i].id.price*cartData[i].count)
       }
       return total;
     }
  },
   template: '<cart></cart>'
 };
 $stateProvider.state(forcart);
 //============================
 var forflexitovaris = {
   name: 'forflexitovari',
   url: '/select/:vid/:brand',
   template: '<flexitov></flexitov>',
   controller: function($scope, $stateParams, $http) {
     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
     var payload = $.param({ 'vid':$stateParams.vid,'brand':$stateParams.brand });
     $scope.brand = $stateParams.brand;
     $http.post("flexi-tovari.php", payload).then(function successget(response){
     $scope.data.ritems=response.data;
     }).catch(function(err){console.log(err)});
  },
 };
 $stateProvider.state(forflexitovaris);
 //============================
 var forflexione = {
   name: 'forflexione',
   url: '/you-choose/:id',
   template: '<flexione></flexione>',
   controller: function($scope,$rootScope, $stateParams, $http, cart) {
     $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
     var payload = $.param({ 'id':$stateParams.id });
     $scope.brand = $stateParams.brand;
     $scope.addtocart = function (ccc) {
       cart.addProd(ccc);
       $scope.iiice = ccc;
     };
     $http.post("flexi-one.php", payload).then(function successget(response){
     $scope.data.litems=response.data;
     }).catch(function(err){console.log(err)});
  },
 };
 $stateProvider.state(forflexione);
 //============================
}).controller("main",['$scope','$http','$state', '$rootScope', function($scope, $http, $state,$rootScope) {
   $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
   var payload = $.param({ 'text': 'text' });
   $http({method: 'POST',
   url:"indexx.php",
    data:payload,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
 }
  }).then(function successget(response){
    $scope.data={};
    $scope.data.items=response.data;
  }).catch(function(err){console.log(err)});
  $scope.ice="мороженное";
  $rootScope.title="главная страница";
  $state.go('hello');
}]);
