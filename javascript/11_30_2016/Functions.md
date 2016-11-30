FUNCTIONS

functions are totally different from other data types including objects.
functions are used to perform some logic and then result out/return the result of that logic.
the result can be any primitive data type or objects.

    syntax:
    function <name of the function>(){
        return <statement>;
    }



    example:
    function addition(){
        // create a variable x and initialize it to 1
        var x = 1;
        
        // create another variable y and initialize it to (x + 1) = 2
        var y = x + 1;
        
        // return y
        return y;
    }
    
functions allow us to create temporary variables inside them. This means that those variable live only inside that function.



TYPES OF FUNCTIONS

There are two types of functions:
1. named functions
2. anonymous functions


named functions
these will have a name associated to them

anonymous functions
these does not have any name references


*** named functions must return something. whereas, anonymous functions MAY OR MAY NOT return any thing.
*** anonymous functions are also called as CALLBACK FUNCTIONS



SCOPE IN JS
this simply means the "life of the variable". 
If a variable is created inside a function then the scope of the variable is within that function. // local variable (scope)
If a variable is created outside a function then the scope of that variable is within that entire js file. // global variable(scope)

*** since life of the global variables is throughout the life of the app, JS doesnt know how much memory it needs to allocate to that variable.
so because of that, WE ALWAYS AVOID GLOBAL VARIABLES!!!!



IIFE CONSTRUCT
Immediately-Invoke Function Expression

These are used to avoid memory leaks from global variables.
    
    syntax:
    (function(){
    
    })();
    
*** always have IIFE construct in your JS. even if its only one line, write it inside the IIFE construct.
*** always have ONLY ONE IIFE construct per js file.    
  


    
    
    