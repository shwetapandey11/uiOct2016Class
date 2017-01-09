// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback function for controller
  function HomeController(UserFactory,LoginService){
    // vm = view model
    var vm = this;
    vm.user = UserFactory.user;

    vm.loginUser = function(){
      LoginService.performLogin();
    };
  }
  // inject the dependencies
  HomeController.$inject = ['UserFactory','LoginService'];

  // call the module and define the controller
  angular.module('projectApp.controllers').controller('HomeController',HomeController);
})(window.angular || (window.angular = {}));
