angular.module("footer", []).directive("forfooter", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'footer.html'
 }
}])
