// IIFE CONSTRUCT
(function(angular){
  'use strict';

  // callback for the directive
  function SrikarElement(){
    var element = {
      restrict: 'E',
      templateUrl: '../../templates/srikarElement.html',
      link: function(scope,element,attribute){
        console.log(attribute.viswa);
        console.log(element[0].children[0]);
      }
    };

    return element;
  }
  SrikarElement.$inject = [];

  // call the directives module
  angular.module('projectApp.directives').directive('srikarElement',SrikarElement);
})(window.angular || (window.angular = {}));
