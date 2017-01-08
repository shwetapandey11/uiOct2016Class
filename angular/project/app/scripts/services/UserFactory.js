// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the factory service type
  function UserFactory(){
    // reference the this variable
    var self = this;

    self.user = {
      username: '',
      password: ''
    };

    return self;
  }
  // inject the dependencies
  UserFactory.$inject = [];

  // define the factory service type
  angular.module('projectApp.services').factory('UserFactory',UserFactory);
})(window.angular || (window.angular = {}));
