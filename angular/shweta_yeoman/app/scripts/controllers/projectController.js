// IIFE 

(function(angular){
	'use strict';

	function ProjectController($scope){
		console.log($scope);
	}

	ProjectController.$inject = ['$scope'];

	angular.module('shwetaYeomanApp').controller('projectController',ProjectController);

}
)(window.angular || (window.angular = {}));