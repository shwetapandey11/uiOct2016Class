angular.module('shwetaYeomanApp').controller('projectController',['$scope','$rootScope',
	function($scope,$rootScope){
		'use strict';
		/*$scope.firstName= 'Shweta';
		$scope.lastName='Ojha';
		}*/

		$scope.user = {
			firstName: 'Shweta',
			lastName: 'Ojha'
		};
		$rootScope.user = {
			firstName: 'Sanjeev',
			lastName: 'Ojha'
		};
	}
]);