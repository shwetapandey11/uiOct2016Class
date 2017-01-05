**OUR FIRST ANGULAR APP**

1. Module

    A module is the core property of angular. Using this module, we define our app.
    
    
    syntax:
        angular.module(<name of our app in string format>,<array of dependencies>);
        
    example:
        angular.module('myApp',[]);
        
2. Dependency Injection
    
    This is a unique feature introduced in angular where we can access a function or an object from one JS file to another JS.
    
    
_____________________________________________________________________________________________________

**MVC approach of angular App**

1. Data binding:
    
    There are,lets say, some input fields inside our html. then our controller in angular should look upon them and record the values what user types.
    
    
M -> MODEL inside our html
    
V -> VIEW as our html itself

C -> CONTROLLER this looks for every change in our view

<[-------------------------------------------------------------------------]>

M -> MODEL

V -> VIEW

VM -> ViewModel



____________________________________________________________________________________



    To define a module, we write like this:
    
        angular.module('myApp',[]);

    
    To call a module, we write like this:
        angular.module('myApp');



*** WE CAN NEST CONTROLLERS BUT WE SHOULD NOT NEST THE ng-app!!!!






