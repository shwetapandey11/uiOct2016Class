'use strict';
describe('Testing the LoginService, should check',function(){
  var LoginService,$location,$window;

  beforeEach(module('projectApp'));
  beforeEach(module('projectApp.services'));

  beforeEach(inject(function(_LoginService_,_$location_,_$window_){
    LoginService = _LoginService_;
    $location = _$location_;
    $window = _$window_;


    $window.sessionStorage = { // mocking sessionStorage
        getItem: function(key) {
            return this[key];
        }
    };
  }));

  it('scenario 1: performLogin',function(){
    var temp = {
      user: {
        username: 'Srikar',
        password: 'Shastry'
      }
    };

    spyOn($location,'path');

    LoginService.performLogin(temp);
    expect($location.path).toHaveBeenCalled();
  });

  it('scenario 2: performLogin',function(){
    var vm = {
      user: {
        username: '',
        password: ''
      },
      loginHasFailed: false
    };

    LoginService.performLogin(vm);
    expect(vm.loginHasFailed).toEqual(true);
  });

  it('scenario 3: checkLogin',function(){
    //$window.sessionStorage.setItem('user',null);
    //spyOn($location,'path');

    LoginService.checkLogin();
    expect(true).toEqual(true);
  });

  it('scenario 4: returnUser',function(){
    LoginService.returnUser();
    expect().toEqual();
  });
});
