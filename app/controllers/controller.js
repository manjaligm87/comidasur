'use strict';

/* Controllers */

var spiceUpControllers = angular.module('spiceUpControllers', []);

spiceUpControllers.run(function()	{
	console.log('Hello there');

})

spiceUpControllers.controller('AppCtrl',['$scope', '$location','MenuResponder',
								'MenuService','menuBycat','menuIdPost','catIdPost','VegNon',
	function($scope, $location, MenuResponder,MenuService,menuBycat,menuIdPost,catIdPost,VegNon)	{
		$scope.$parent.$root['manuList'] = MenuResponder.query();
		$scope.$parent.$root['menuList'] = MenuService.query();
		$scope.$parent.$root['IdPost'] = menuIdPost.query();
		$scope.$parent.$root['catIdPost'] = catIdPost.query();
		$scope.$parent.$root['CatMenu'] = menuBycat.query();
		$scope.$parent.$root['catnamelist'] = VegNon.query();
		$scope.triggerAside = function() {
			console.log('triggering aside');
			Lungo.Router.aside('main', 'aside1');
		}
	}
	]);

spiceUpControllers.controller ('DynamicCtrl',['$scope', '$location','MenuResponder',
	function($scope, $location, MenuResponder)	{
		$scope.menuData = $scope.$parent.$root['manuList']
		console.log($scope.menuData);
	}]);

spiceUpControllers.controller ('DeeplinkCtrl',['$scope', '$routeParams',
	function($scope, $routeParams)	{
		$scope.paramMsg = $routeParams.msg;
	}]);

spiceUpControllers.controller ('menuCtrl',['$scope', '$location','menuBycat',
	function($scope, $location,menuBycat)	{
		$scope.menusitems=$scope.$parent.$root['CatMenu'] 
	}]);

spiceUpControllers.controller('PostCtrl', ['$scope','$routeParams','menuIdPost',
function($scope, $routeParams, menuIdPost) { 
	$scope.menudetail=menuIdPost.query();
          $scope.menudetail = menuIdPost.query({menu_id: $routeParams.menu_id});
          $scope.$on('menu_id', function(data) {
          console.log(data);
          if(data.menu_id===$routeParams.menu_id) {
          $scope.menudetail = data;
         }});
       }]);
spiceUpControllers.controller('CatCtrl', ['$scope','$location', '$routeParams', 'catIdPost',
function($scope,$location, $routeParams, catIdPost) {
$scope.ShowmenuByCatId = catIdPost.query({subcategory_id: $routeParams.subcategory_id});
          $scope.$on('subcategory_id', function(data) {
          console.dir(data);
          if(data.subcategory_id ==$routeParams.subcategory_id) {
          $scope.ShowmenuByCatId = data;}});
       }]);

spiceUpControllers.controller ('CatNameCtrl',['$scope', '$location','VegNon',
function($scope, $location,VegNon)	{
$scope.veg_nonvegs=$scope.$parent.$root['catnamelist'];
}]);

 // $scope.GetStates = function () {
 //     var countryId = $scope.country;
 //     if (countryId) {
 //         $http({
 //             method: 'POST',
 //             url: '/Home/GetStates/',
 //             data: JSON.stringify({ countryId: countryId })
 //         }).success(function (data, status, headers, config) {
 //             $scope.states = data;
 //         }).error(function (data, status, headers, config) {
 //             $scope.message = 'Unexpected Error';
 //         });
 //     }
 //     else {
 //         $scope.states = null;
 //     }
 // }