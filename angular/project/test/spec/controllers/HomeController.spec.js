'use strict';
describe('Testing the HomeController, ',function(){
  var HomeController,UserFactory,LoginService,URLFactory,APIService,$httpBackend;

  // before each unit test runs, we make sure that we include the modules
  beforeEach(module('projectApp'));
  beforeEach(module('projectApp.controllers'));

  // before each unit test runs, we make sure that the controller is injected
  beforeEach(inject(function(_$controller_,_UserFactory_,_LoginService_,_URLFactory_,_APIService_,$injector){
    UserFactory = _UserFactory_;
    LoginService = _LoginService_;
    URLFactory = _URLFactory_;
    APIService = _APIService_;
    $httpBackend = $injector.get('$httpBackend');

    HomeController = _$controller_('HomeController',{
      'UserFactory': UserFactory,
      'LoginService': LoginService,
      'URLFactory': URLFactory,
      'APIService': APIService
    });
  }));

  // we write our unit tests....
  // in jasmine, we write unit tests inside the 'it' block

  it('should initialize the controller',function(){
    expect(HomeController.loginHasFailed).toEqual(false);
  });

  it('should test the loginUser()',function(){
    spyOn(LoginService,'performLogin');
    HomeController.loginUser();
    expect(LoginService.performLogin).toHaveBeenCalled();
  });

  it('should test the APIService to load the data',function(){
    spyOn(APIService,'get');
    $httpBackend.when('GET','https://jsonplaceholder.typicode.com/photos').respond(200,[{test:'abcd'}]);

    $httpBackend.flush();

    expect(HomeController.photos[0].test).toEqual('abcd');
  });
});
