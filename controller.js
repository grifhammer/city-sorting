angular.module('myApp', []).controller('myController', function($scope, $filter){
	$scope.cities = cities;
	console.log(cities);
	var orderBy = $filter('orderBy')
	$scope.landAreaSort = function(){
		$scope.cities = orderBy($scope.cities, $scope.evalLandArea, false)
	};
	$scope.evalLandArea = function(city){
		// console.log(parseInt(city.landArea))
		return parseFloat(city.landArea);
	};
});