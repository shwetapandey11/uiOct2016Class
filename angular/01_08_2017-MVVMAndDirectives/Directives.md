**Directives**

The entire angular framework sits purely on the concept of directives.
We can safely say that from html's prospective, directives are custom attributes.

From angular's prospective, these are special types of attributes using which:
1. we can render an entire html
2. we can get the value from the controller as well as from the view model
3. we can alter the html as soon as it is loaded/rendered
4. we can perform window(DOM) related logics.


    There mainly three types of directives:
    1. attribute level directive
    2. element level directive
    3. class level directive
    
    
    
    example:
    1. in directive.js:
    
    // IIFE CONSTRUCT
    (function(angular){
      'use strict';
    
      // callback for the directive
      function SrikarElement(){
        var self = this;
    
        self.element = {
          // restrict(required) -> what kind of directive it is:
          // E -> Element
          // A -> Attribute
          // C -> Class
          restrict: 'E',
            
          // required -> if we are dependent of other directive, we pass here
          required: 'ngModel',
            
          // prelink(optional) -> perform some logic before the element is rendered (or) the directive kicks in
          prelink: function(){
    
          },
    
          // postlink(required) -> perform the logic after the element is rendered.
          // this has three attributes for sure,
          // scope -> if directive has no scope defined, then it takes the immediate parent's scope
          // element -> it targets the directive element it self and shows all the child nodes
          // attributes -> we can access the attributes defined within that directive
          // requiredProperty -> if our directive is dependent on other directive then the forth argument is that directive
          postlink: function(scope,element,attribute,requiredProperty){
    
          },
    
          // scope(optional) -> similar to $scope and $rootScope, we can define our own scope for the directive
          scope: {
          
          },
          
          // transclude -> transclusion means that we are basically making sure that the controller communicates with our directive
          // it is a boolean value
          transclude: true/false,
          
          // template -> this is used to render our html.
          template: '<div class="">
          
                    '</div>',
                    
          // templateUrl -> to avoid the upper html scenario, we can source an entire html file
          templateUrl: '../templates/home.tpl.html'
        };
    
        return self.element;
      }
      SrikarElement.$inject = [];
    
      // call the directives module
      angular.module('projectApp.directives').directive('srikarElement',SrikarElement);
    })(window.angular || (window.angular = {}));
    
    2. in html:
    <body>
        <srikar-element></srikar-element>
    </body>