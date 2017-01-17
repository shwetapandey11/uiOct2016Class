// IIFE Construct
(function(angular){
  'use strict';

  function ProjectController($rootScope,UserFactory,LoginService,URLFactory,APIService){
    var vm = this;

    vm.init = function(){
      // create a clone/duplicate of the user in the factory.
      vm.user = angular.copy(LoginService.returnUser());

      //vm.classRooms = angular.copy(UserFactory.classRooms);
      vm.posts = [];
      APIService.get(URLFactory.albums,'array').then(function(data){
        vm.posts = angular.copy(data);
      });

      LoginService.checkLogin(vm);
    };
    vm.init();

    // logic to be executed when user clicks on submit button
    vm.submitRequest = function(){
      APIService.post(URLFactory.posts,vm.posts).then(function(data){
        console.log(data);
      });
    };
  }
  ProjectController.$inject = ['$rootScope','UserFactory','LoginService','URLFactory','APIService'];

  // call the module from app.js file
  angular.module('projectApp.controllers').controller('ProjectController',ProjectController);
})(window.angular || (window.angular = {}));
