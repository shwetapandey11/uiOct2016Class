// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the factory service type
  function LoginService(UserFactory,$location,$window){
    // reference the this variable
    var self = this;

    // logic to perform the login
    self.performLogin = function(vm){
      if(vm.user.username === 'Srikar' && vm.user.password === 'Shastry'){
        // we need to add the user object to our session storage
        // **REMEMBER SESSION/LOCAL STORAGE ONLY HOLDS STRING DATA
        $window.sessionStorage.setItem('user',angular.toJson({username:vm.user.username,password:vm.user.password}));

        /* /#!/about */
        $location.path('/about');
      }
      else{
        vm.loginHasFailed = true;
      }
    };

    // logic to check if the username and password fields are not empty
    self.checkLogin = function(){
      var user = $window.sessionStorage.getItem('user');
      if(user === null){
        $location.path('/home');
      }
    };

    self.returnUser = function(){
      var user = $window.sessionStorage.getItem('user');
      return JSON.parse(user);
    };

    // $window.sessionStorage.setItem() -> adds a string data to the session storage
    // $window.sessionStorage.getItem() -> gets a string data from the session storage
    // $window.sessionStorage.removeItem() -> removes the string data from the session storage
  }
  // inject the dependencies
  LoginService.$inject = ['UserFactory','$location','$window'];

  // define the factory service type
  angular.module('projectApp.services').service('LoginService',LoginService);
})(window.angular || (window.angular = {}));
