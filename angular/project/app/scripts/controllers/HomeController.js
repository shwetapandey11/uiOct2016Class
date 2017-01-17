// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback function for controller
  function HomeController(UserFactory,LoginService,URLFactory,APIService){
    // vm = view model
    var vm = this;

    vm.user = angular.copy(UserFactory.user);
    vm.loginHasFailed = false;

    vm.photos = [];
    APIService.get(URLFactory.photos,'array').then(function(data){
      vm.photos = angular.copy(data);
    });

    vm.loginUser = function(){
      LoginService.performLogin(vm);
    };
  }
  // inject the dependencies
  HomeController.$inject = ['UserFactory','LoginService','URLFactory','APIService'];

  // call the module and define the controller
  angular.module('projectApp.controllers').controller('HomeController',HomeController);
})(window.angular || (window.angular = {}));
