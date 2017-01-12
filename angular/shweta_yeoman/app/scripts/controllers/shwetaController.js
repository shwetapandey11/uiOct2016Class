// IIFE

(function(angular) {

	'use strict';

	function ShwetaController($scope) {
		console.log($scope);
	}

	ShwetaController.$inject = ['$scope'];

	angular.module('newModule.controllers',[]).controller('shwetaController',ShwetaController);

})(window.angular || (window.angular = {}));