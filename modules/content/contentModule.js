angular.module('content', []).directive("dogmain", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'dog_main.html'
 }
}]
).directive("flexi", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   templateUrl:'flexi.html',
    scope: false
 }
}]
).directive("flexitov", [ "$state",  function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'flexi-tovari.html'
 }
}]
).directive("flexione", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
  scope: false,
   templateUrl:'flexi_one.html'
 }
}]
)
