// IIFE Construct
(function(angular){
  'use strict';

  function AppConfig($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl: '../templates/home.tpl.html',
        controller: 'HomeController'
      })
      .when('/about',{
        templateUrl: '../templates/about.tpl.html',
        controller: 'ProjectController'
      })
      .otherwise('/home');
  }
  AppConfig.$inject = ['$routeProvider'];

  function AppRun($rootScope){
    $rootScope.user = {
      firstName: '',
      lastName: ''
    };
  }
  AppRun.$inject = ['$rootScope'];

  // to define the app module, we write:
  angular.module('projectApp',
                ['ngAnimate',
                  'ngCookies',
                  'ngMessages',
                  'ngAria',
                  'ngResource',
                  'ngRoute',
                  'ngSanitize',
                  'ngTouch',
                  'projectApp.controllers'])
    .config(AppConfig)
    .run(AppRun);
  // create a custom module
  angular.module('projectApp.controllers',[]);
})(window.angular || (window.angular = {}));
