// IIFE CONSTRUCT
(function(angular){
  'use strict';
  // callback for the config
  function httpInterceptorConfig($httpProvider){
    $httpProvider.interceptors.push('httpInterceptor');
  }
  httpInterceptorConfig.$inject = ['$httpProvider'];

  // callback for the factory
  function HttpInterceptor($q,$injector){
    return {
      'request': function(config){
        return config || $q.when(config);
      },
      'response': function(config){
        return config || $q.when(config);
      },
      'requestError': function(rejection){
        return $q.reject(rejection);
      },
      'responseError': function(rejection){
        // AVOID CIRCULAR DEPENDENCY
        var rootScope = rootScope || $injector.get('$rootScope');
        var http = http || $injector.get('$http');

        switch(rejection.status){
          case 400:{
            rootScope.errorField = true;
            rootScope.errorMessage = rejection.data.message || 'Bad request sent to the server';

            return $q.defer().promise.then(function(){
              return http(rejection.config);
            });
          }
          break;
          case 401:{
            rootScope.errorField = true;
            rootScope.errorMessage = rejection.data.message || 'You are not authenticated.';

            return $q.defer().promise.then(function(){
              return http(rejection.config);
            });
          }
          break;
          case 403:{
            rootScope.errorField = true;
            rootScope.errorMessage = rejection.data.message || 'You are not authorised.';

            return $q.defer().promise.then(function(){
              return http(rejection.config);
            });
          }
          break;
          case 404:{
            rootScope.errorField = true;
            rootScope.errorMessage = rejection.data.message || 'The requested data does not exist in the db.';

            return $q.defer().promise.then(function(){
              return http(rejection.config);
            });
          }
          break;
          case 500:{
            rootScope.errorField = true;
            rootScope.errorMessage = rejection.data.message || 'Internal server error happend. Please try again.';

            return $q.defer().promise.then(function(){
              return http(rejection.config);
            });
          }
          break;
        }

        return $q.reject(rejection);
      }
    };
  }
  HttpInterceptor.$inject = ['$q','$injector'];

  // define the interceptor module
  angular.module('httpInterceptor',[])
  .config(httpInterceptorConfig)
  .factory('httpInterceptor',HttpInterceptor);
})(window.angular || (window.angular = {}));
