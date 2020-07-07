(function(){
'use strict';
angular.module('Filters',[])
.controller('MyFilters',MyFilters);
MyFilters.$inject = ['$scope','$filter'];
function MyFilters($scope,$filter){
  $scope.name = "Priya";
  var out = $filter('uppercase')($scope.name);

  $scope.sayM = function(){
    var msg = "Priya";
    var output = $filter('uppercase')(msg);
    return output;
  };
};
})();
