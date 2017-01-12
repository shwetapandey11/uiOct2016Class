//IIFE

(function(){

  'use strict';
  /* AppRun is run only once the app starts. */

  /*Since AppRun is not a controller, $scope can'tbe injected. $rootScope is Injected. */

  /*function AppRun($rootScope) {
    console.log($rootScope);

  }
  AppRun.$inject = ['$rootScope'];
  */

  angular.module('shwetaYeomanApp',
      ['ngAnimate',
      'ngCookies',
      'ngAria',
      'ngRoute',
      'ngTouch',
      'ngResource',
      'ngSanitize',
      'newModule.controllers']);

  //.run(AppRun);

})();// in case angular object is unavailable, we set it to an empty object.