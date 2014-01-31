var showvegNon = angular.module('showvegNon', ['ngResource']);

showvegNon.factory('VegNon', ['$resource',
  function($resource){
    var VegNon= $resource('/restaurantapp/index.php/home/categoryNamelist', {}, {
      get: {method:'GET',isArray:true}
    });
     return VegNon;
  }]);