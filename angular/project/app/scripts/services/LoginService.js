// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the factory service type
  function LoginService(UserFactory,$location){
    // reference the this variable
    var self = this;

    // logic to perform the login
    self.performLogin = function(){
      if(UserFactory.user.username === 'Srikar' && UserFactory.user.password === 'Shastry'){
        console.log('Login was successful');
        $location.path('/about');
      }
    };

    // logic to check if the username and password fields are not empty
    self.checkLogin = function($scope){
      if($scope.user.username === '' && $scope.user.password === ''){
        $location.path('/home');
      }
    };
  }
  // inject the dependencies
  LoginService.$inject = ['UserFactory','$location'];

  // define the factory service type
  angular.module('projectApp.services').service('LoginService',LoginService);
})(window.angular || (window.angular = {}));
