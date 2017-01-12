// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the directive
  function SrikarElement(){
    var element = {
      restrict: 'E',
      scope: {
        firstName: '=ngModel'
      },
      templateUrl: '../../templates/srikarElement.html',
      link: function(scope,element,attribute){
        console.log(scope.firstName);
      }
    };

    return element;
  }
  SrikarElement.$inject = [];

  // call the directives module
  angular.module('projectApp.directives').directive('srikarElement',SrikarElement);
})(window.angular || (window.angular = {}));
