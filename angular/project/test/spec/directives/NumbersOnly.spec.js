'use strict';
describe('Testing the NumbersOnly Directive,  should check',function(){

  var $compile,$rootScope;

  beforeEach(module('projectApp'));
  beforeEach(module('projectApp.directives'));

  beforeEach(inject(function(_$compile_,_$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.myForm = {};

    $compile('<form name="myForm" novalidate>'+
                '<input type="text" name="age" ng-model="someModel" numbers-only/>'+
             '</form>')($rootScope);


    $rootScope.$digest();
  }));

  it('scenario 1: link function is working',function(){
    $rootScope.myForm.age.$setViewValue('567srikar');
    $rootScope.$digest();

    expect($rootScope.someModel).toEqual('567');
  });
});
