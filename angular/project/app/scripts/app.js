// IIFE Construct
(function(angular){
  'use strict';

  function AppConfig($routeProvider,$httpProvider){
    // client side routing
    $routeProvider
      .when('/home',{
        templateUrl: '../templates/home.tpl.html',
        controller: 'HomeController as HomeCtrl'
      })
      .when('/about',{
        templateUrl: '../templates/about.tpl.html',
        controller: 'ProjectController',
        controllerAs: 'ProjectCtrl'
      })
      .otherwise('/home');


      /*$routeParam*/

    // Server API call config
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.common.Accept = 'application/json';

  }
  AppConfig.$inject = ['$routeProvider','$httpProvider'];

  function AppRun($rootScope){
    $rootScope.user = {
      firstName: '',
      lastName: ''
    };

    $rootScope.errorField = false;
    $rootScope.errorMessage = '';
  }
  AppRun.$inject = ['$rootScope'];

  // to define the app module, we write:
  angular.module('projectApp',
                [ 'ngAnimate','ngCookies','ngMessages','ngAria','ngResource','ngRoute','ngSanitize','ngTouch',
                  'ui.grid',
                  'httpInterceptor',
                  'projectApp.controllers','projectApp.services','projectApp.directives'
                  ])
    .config(AppConfig)
    .run(AppRun);

  // create a custom module for controllers
  angular.module('projectApp.controllers',[]);
  // create a custom module for services
  angular.module('projectApp.services',[]);
  // create a custom module for directives
  angular.module('projectApp.directives',[]);
})(window.angular || (window.angular = {}));
