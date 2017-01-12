**MVVM Architecture**

1. We treat our controller as a class which will only initialize the view model.
2. All the business logic will sit inside the services. 
3. We share the services across the application.

This way we are indirectly eliminating the use of '$scope' and '$rootScope'.

    To setup the MVVM approach in angular, follow these steps:
    
    1. in app.js
        whenever we are writing the routes, inside the controller, make sure to add the alias or add addition property called 'contollerAs'
        example:
            $routeProvider
              .when('/home',{
                templateUrl: '../templates/home.tpl.html',
                controller: 'HomeController as HomeCtrl'
              });
                    
                    OR
            
            $routeProvider
              .when('/home',{
                templateUrl: '../templates/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'HomeCtrl'
              });
              
                    
        If there are no routes and we are writing controller in the html itself then write like this:
            
            <div ng-controller="HomeController"></div>
                            TO
            <div ng-controller="HomeController as HomeCtrl"></div>
            
            
    2. in html
        Now that we have create an alias(namespace) for our controller, we need to make use of this alias to bind our data to the controller
        example:
                                change
            <input type="text" ng-model="user.firstName"/>                       
                                  TO
            <input type="text" ng-model="HomeCtrl.user.firstName"/>
            
            
    3. in controller.js
        We need to eliminate the $scope as much as possible. So, we wont be injecting the $scope unless and until its needed.
        example:
            // IIFE CONSTRUCT
            (function(angular){
              'use strict';
              function HomeController(){
                // vm = view model
                var vm = this;
                
                // define the initialization
                vm.init = function(){
                    vm.user = {
                        firstName: '',
                        lastName: ''
                    };
                };
                
                // call the initialization
                vm.init();
              }
              HomeController.$inject = [];
            
              angular.module('projectApp.controllers').controller('HomeController',HomeController);
            })(window.angular || (window.angular = {}));
            
            
            
            
**AVOID SCOPE SCOOPING**
    
    Lets says we have this html:
     

    <div ng-controller="HomeController">
      <div ng-controller="ProjectController">
        <input type="text" ng-model="user.username"/>
        <input type="password" ng-model="user.password"/>
      </div>
    </div>

    Lets assume for a second that both HomeController and ProjectController as user object defined.
    Now, the question arises that from which controller, the ng-model is going to get the data binded?
    This scenario is called "SCOPE SCOOP".
    This confusion will make our application inconsistent and sometimes might crash.
    
    To avoid this issue, we use MVVM architectural approach. We give aliases to our controllers and use those aliases to bind our ng-model.
    
    
