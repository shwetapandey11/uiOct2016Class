// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback function for controller
  function HomeController($scope,UserFactory,LoginService){
    $scope.user = UserFactory.user;

    $scope.loginUser = function(){
      LoginService.performLogin();
    };
  }
  // inject the dependencies
  HomeController.$inject = ['$scope','UserFactory','LoginService'];

  // call the module and define the controller
  angular.module('projectApp.controllers').controller('HomeController',HomeController);
})(window.angular || (window.angular = {}));
