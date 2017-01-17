angular.module('shwetaYeomanApp',['ngRoute'])
  .config(function($routeProvider){
    'use strict';
    $routeProvider
      .when('/main',{
        templateUrl: '../views/main.html',
        controller: 'mainController'
      })
      .when('/about',{
        templateUrl: '../views/about.html',
        controller: 'shwetaController'
      })
      .otherwise('/index.html');
  })
  .run(function($rootScope){
    'use strict';
    $rootScope.user = {
      userName : '',
      password: ''
    };
  });