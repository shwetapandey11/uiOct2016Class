For every angular module definition (in short, ng-app), there a $rootScope object assigned in our app file.

This $rootScope, tell the angular that it is the 'viewModel' for the app.


***$rootScope is a scope variable that is global of all other scopes in angular app

$rootScope -> ng-app

$scope -> ng-controller

$scope is the child of $rootScope and it is the viewModel only for our controller.
