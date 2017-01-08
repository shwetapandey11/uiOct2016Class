// IIFE Construct
(function(angular){
  'use strict';

  function ProjectController($rootScope,$scope,UserFactory,LoginService){
    $scope.init = function(){
      // create a clone/duplicate of the user in the factory.
      $scope.user = angular.copy(UserFactory.user);
      console.log($scope.user);

      LoginService.checkLogin($scope);
    }
    $scope.init();
  }
  ProjectController.$inject = ['$rootScope','$scope','UserFactory','LoginService'];

  // call the module from app.js file
  angular.module('projectApp.controllers').controller('ProjectController',ProjectController);
})(window.angular || (window.angular = {}));
