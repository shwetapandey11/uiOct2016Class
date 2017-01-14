// IIFE Construct
(function(angular){
  'use strict';

  function ProjectController($rootScope,UserFactory,LoginService){
    var vm = this;

    vm.init = function(){
      // create a clone/duplicate of the user in the factory.
      vm.user = angular.copy(LoginService.returnUser());

      vm.classRooms = angular.copy(UserFactory.classRooms);

      LoginService.checkLogin(vm);
    };
    vm.init();
  }
  ProjectController.$inject = ['$rootScope','UserFactory','LoginService'];

  // call the module from app.js file
  angular.module('projectApp.controllers').controller('ProjectController',ProjectController);
})(window.angular || (window.angular = {}));
