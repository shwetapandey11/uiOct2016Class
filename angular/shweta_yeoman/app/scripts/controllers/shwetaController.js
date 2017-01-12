
angular.module('newModule.controllers',[]).controller('shwetaController',['$scope','$location',
	function ($scope,$location) {
		'use strict';
		$scope.user = {};
		$scope.user.firstName = 'Shweta';
		$scope.user.lastName = 'Ojha';

		$scope.url = $location.absUrl();
		$scope.protocol = $location.protocol();
		$scope.host = $location.host();

		$scope.reverse = function () {
			$scope.user.firstName = $scope.user.firstName.split('').reverse().join('');
			$scope.user.lastName = $scope.user.lastName.split('').reverse().join('');
		};
}]);


