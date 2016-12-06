JS CLOSURES

If we have one function called 'outerFunc' inside which, we create a variable called 'global'.
Now, we create a function called 'innerFunc' inside the 'outerFunc'. This 'innerFunc' has a same variable declaration.
Then, the call inside that 'innerFunc' will always invoke the newly created variable inside the 'innerFunc'.


    example:
    function outer(){
        var test = 'Srikar';
    
        function inner(){
            var test = 100;
            
            function innerMost(){
                var test = 'Shastry';
                
                console.log(test);
            }
            innerMost();
        }
        
        inner();
    }
    outer();
    
    in the above example, JS is going look for 'test' inside the innerMost().
    if it cannot find it, it will move one immediate parent level up and will look for definition of test in inner(). 
    if it still cannot find it, it will move one more level up and look for definition of test in outer(). 
    Once, it finds the definition, it will take that. If not, the moves one level up, and if it still cannot find the definition,
    it will throw an exception error saying 'test was never defined'.


Definition:
  Lets say we have one function inside another function then we can access variables 
  created in the outer function inside the inner function.
    