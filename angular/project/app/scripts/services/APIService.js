// IIFE CONSTRUCT
(function(angular){
  'use strict';
  // callback for service
  function APIService($resource,$q){
    var self = this;

    // GET call
    self.get = function(url,typeOfDataToBeExpected){
      var defer = $q.defer();

      if(typeOfDataToBeExpected === 'object'){
        $resource(url).get().$promise.then(
          // success callback
          function(response){
            defer.resolve(response);
          }
        );
      }
      else if(typeOfDataToBeExpected === 'array'){
        $resource(url).query().$promise.then(
          // success callback
          function(response){
            defer.resolve(response);
          }
        );
      }

      return defer.promise;
    };

    // POST call
    self.post = function(url,dataToBeSentToServer){
      var defer = $q.defer();

      $resource(url).post(dataToBeSentToServer).$promise.then(
        // success callback
        function(response){
          defer.resolve(response);
        }
      );

      return defer.promise;
    };
  }
  APIService.$inject = ['$resource','$q'];

  // define the service
  angular.module('projectApp.services').service('APIService',APIService);
})(window.angular || (window.angular = {}));
