angular.module("myExp").directive("main", [ "$state", function ($state){
  return {
   restrict:"E",
   templateUrl: 'mainView.html'
 }
}]
)
