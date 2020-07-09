(function(){
'use strict';

var shoppingList1 =["Milk","Cookies","Donuts","CenterPiece are too big","How you doin"];

var shoppingList2=[
  {
    name : "Milk",
    quantity : "20"
  },
  {
    name : "Cookies",
    quantity : "10"
  },
  {
    name : "Donuts",
    quantity : "20"
  },
  {
    name : "CenterPiece are too big",
    quantity : "20"
  },
  {
    name : "How you doin",
    quantity : "20"
  },
];

angular.module('shoppingList',[])
.controller('ShopController',ShopController)

ShopController.$inject=['$scope']
function ShopController($scope){
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;


  $scope.addItem =function (){
    var newItem = {
      name : $scope.newitemName,
      quantity : $scope.newitemQuan
    };
    $scope.shoppingList2.push(newItem);
    $scope.newitemName='';
     $scope.newitemQuan='';

  };
};

})();
