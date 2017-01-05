// IIFE Construct
(function(angular){
  'use strict';

  function ProjectController($rootScope,$scope){
    $scope.user = {
      firstName: 'Srikar',
      lastName: 'Shastry'
    };
  }
  ProjectController.$inject = ['$rootScope','$scope'];

  // call the module from app.js file
  angular.module('projectApp.controllers').controller('ProjectController',ProjectController);
})(window.angular || (window.angular = {}));


