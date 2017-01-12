// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the factory service type
  function UserFactory(){
    // reference the this variable
    var self = this;

    self.user = {
      username: '',
      password: '',
      age: '',
      firstName: 'My name is Srikar'
    };

    self.classRooms = [
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      },
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      },
      {
        firstName: 'Srikar',
        lastName: 'Shastry',
        rollNo: 11
      },
      {
        firstName: 'Viswa',
        lastName: 'Kandi',
        rollNo: 22
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        rollNo: 33
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        rollNo: 44
      }
    ];

    return self;
  }
  // inject the dependencies
  UserFactory.$inject = [];

  // define the factory service type
  angular.module('projectApp.services').factory('UserFactory',UserFactory);
})(window.angular || (window.angular = {}));
