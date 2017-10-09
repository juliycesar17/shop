angular.module('cartshop',[]).directive("cart", [ "$state", function ($state){
  return {
   restrict:"E",
   replace:true,
   scope: false,
   templateUrl:'cart.html'
 }
}]).factory("cart",['$rootScope', function($rootScope){
    var cartData=[];
    var addedToExistingItem;
      return {
          addProd:  function (id) {
            $rootScope.mes.push(id);
            var addtoexistingitem = false;
            for (var i = 0; i < cartData.length; i++) {
              if (cartData[i].id.id == id.id) {
              cartData[i].count++;
              addedToExistingItem = true;
              break;
               }
            }
            if (!addedToExistingItem) {
              cartData.push({
              count: 1, id: id
              });
            }
      },

          getProducts: function () {
            return cartData;
          },
           removwProduct: function (id) {
             for (var i = 0; i < cartData.length; i++) {
               if (cartData[i].id.id == id.id) {
                   cartData.splice(i, 1)
               }
             }
           }
   }
}])
