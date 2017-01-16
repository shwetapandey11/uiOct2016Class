// IIFE Construct
(function(angular){
  'use strict';

  // callback for the factory
  function URLFactory(){
    var self = this;

    self.domain = 'https://jsonplaceholder.typicode.com';

    self.api = {
      'posts': self.domain + '/posts',
      'comments': self.domain + '/comments',
      'albums': self.domain + '/albums',
      'photos': self.domain + '/photos'
    };

    return self.api;
  }
  URLFactory.$inject = [];

  // define the URL factory
  angular.module('projectApp.services').factory('URLFactory',URLFactory);
})(window.angular || (window.angular = {}));
