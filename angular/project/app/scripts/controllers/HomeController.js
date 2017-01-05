// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback function for controller
  function HomeController($scope,$location){
    $scope.user = {
      'username': '',
      'password': ''
    };

    $scope.loginUser = function(){
      if($scope.user.username === 'Srikar' && $scope.user.password === 'Shastry'){
        console.log('Login was successful');
        $location.path('/about');
      }
    };
  }
  // inject the dependencies
  HomeController.$inject = ['$scope','$location'];

  // call the module and define the controller
  angular.module('projectApp.controllers').controller('HomeController',HomeController);
})(window.angular || (window.angular = {}));
