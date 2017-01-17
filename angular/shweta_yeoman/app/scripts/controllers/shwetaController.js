(function(){
	'use strict';

	angular.module('shwetaYeomanApp').controller('shwetaController',['$scope',

	function($scope){
		$scope.user = people;
		}
	]);
		var people = [
		{
			id: 1,
			roll: 123,
			hobby: 'music'
		},
		{
			id: 2,
			roll: 223,
			hobby: 'dance'
		},
		{
			id: 2,
			roll: 223,
			hobby: 'reading'
		}
	];
})();