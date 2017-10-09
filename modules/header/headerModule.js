angular.module("header", [])
  .directive("forheader", [ "$state", function ($state){
    return {
     restrict:"E",
     replace:true,
     scope: false,
     templateUrl:'header.html'
   }
  }])
