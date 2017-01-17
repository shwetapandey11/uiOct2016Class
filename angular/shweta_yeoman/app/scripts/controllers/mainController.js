angular.module('shwetaYeomanApp').controller('mainController',['$scope','$location','$rootScope',

	function($scope,$location,$rootScope) {
		'use strict';

		$scope.address = 'CA';

		/*$scope.user = {
			firstName: '',
			lastName: ''
		};*/

		$scope.submit = function(){
			if($scope.user.userName === 'Shweta' && $scope.user.password === 'Ojha'){
				$location.path('/about');
				console.log('Login was Successfull');
			}
		};

		$rootScope.reverse = function(){
			$scope.user.firstName = $scope.user.firstName.split('').reverse().join(''); 
			$scope.user.lastName = $scope.user.lastName.split('').reverse().join(''); 
		};
	}
]);