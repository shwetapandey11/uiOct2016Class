**SERVICES**

Services are a special type of functions or objects that can be shared or store a data across the application.
The same services can also be used to perform business logic that is only accessed by the controller.


    **WE SHOULD NOT BE WRITING THE BUSINESS LOGIC IN THE CONTROLLER. 
      SINCE CONTROLLER IS DIRECTLY CONNECTED TO THE VIEW, IT SHOULD ONLY INITIALIZE THE VIEWMODEL.
      IT SHOULD NOT PERFORM ANY BUSINESS LOGICS.
      
_____________________________________________________________________________________
    
    There are two main types of services in angularJS:
    
    1. Singleton service (in angular, its called FACTORY):
        This service is an object that should be constant throughout the application.
        OR
        This service is an object that can be reused throughout the application.
        
        Syntax:
            angular.module(<module name>).factory(<name of the service/factory> , <callback function for the service/factory>);
                
        Example:
            // IIFE CONSTRUCT
            (function(angular){
              'use strict';
            
              // callback for the factory service type
              function UserFactory(){
            
              }
              // inject the dependencies
              UserFactory.$inject = [];
            
              // define the factory service type
              angular.module('projectApp.services').factory('UserFactory',UserFactory);
            })(window.angular || (window.angular = {}));

    
    ** angular introduced 'angular.copy' to perform deeply linked copy of objects.
        this is similar to Object.create() in plain js.
        
    ** to add another property to the existing object, we use 'angular.extend'.    
    
    
    2. service type
        this is a class that is used to write our business logic. This can be treated as a factory type if needed.
        
        Syntax:
            angular.module(<module name>).service(<name of the service/factory> , <callback function for the service/factory>);
        
        Example:
                
            // IIFE CONSTRUCT
            (function(angular){
              'use strict';
            
              // callback for the factory service type
              function LoginService(){
                // reference the this variable
                var self = this;
            
                self.performLogin = function(){
                  // business logic
                };
              }
              // inject the dependencies
              LoginService.$inject = [];
            
              // define the factory service type
              angular.module('projectApp.services').service('LoginService',LoginService);
            })(window.angular || (window.angular = {}));


    ** service type is always treated like a class!!!