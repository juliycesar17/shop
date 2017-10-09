angular.module('navigation', []).directive("fornav", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
   templateUrl:'navView.html'
 }
}]
)
