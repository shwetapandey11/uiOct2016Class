// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the directive
  function NumbersOnly($window){
    var attr = {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope,element,attribute,ngModelCtrl){
        ngModelCtrl.$parsers.push(function(text){
          if(text){
            var numbersValue = text.replace(/[^0-9]/g, '');
            if(numbersValue !== text){
              ngModelCtrl.$setViewValue(numbersValue);
              ngModelCtrl.$render();
            }
            return numbersValue;
          }
          return undefined;
        });

        var window = angular.element($window);

        window.bind('scroll',function(){
          console.log('scrolled');
        });
      }
    };

    return attr;
  }
  NumbersOnly.$inject = ['$window'];

  // call the directives module
  angular.module('projectApp.directives').directive('numbersOnly',NumbersOnly);
})(window.angular || (window.angular = {}));
