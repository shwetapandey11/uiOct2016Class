Loops

Loops are a method of re-interating the same logic again and again until it reaches the final number.


    Types of loops
    
    1. for
        this is the standard looping keyword. this is the mostly/commonly used looping mechanism
        to define a 'for' statement, we pass three arguements to this for statement.
        syntax:
            for(<initialized variable>; <the condition>; <incrementing/decrementing the initialized variable>){
                // any logic
            }
        *** we usually use numbers for the 'initialized variable'
        *** we need the condition to tell for statement to stop at one point where the condition fails
        
        example:
            for(var i = 0; i < 5; i++){
                console.log(i);
            }
            
            var test = [66,33,88,11,99,44,22,55];
            for(var i = 0; i < test.length; i++){
                console.log(test[i]);
            }
            
    2. for (using the 'in' statement)
        this is similar to the above looping statement but it is only used in objects
        *** remember arrays are a type of objects, so we can use this looping for arrays also.
        syntax:
            for(<new variable> in <object name>){
                
            }
         
    3. do while statements
       this is similar to for loop with certain syntax changes
       syntax:
        <initialize a variable>
        do{
            // logic
            <increment/decrement the initialized variable>
        } while(<condition>)
        
       example:
        var i = 0;
        do{
            console.log(i);
            i++; // this is similar to i+=1(i = i + 1)
        }
        while(i < 10);
       *** there is a slight difference between do...while and while statements
        do...while runs the logic before the condition check
        while run the condition first and then execute the logic
        
    4. forEach
        this type of looping mainly happens on indexes of an array
        syntax:
            <array>.forEach(function(value,index){
            
            });
        
        example:
        var test = [11,22,33,44,55,66];
        test.forEach(function(val,i){
            console.log('Value at index ' + i + ' is: ' + val);
            // Value at index 0 is: 11
            // Value at index 1 is: 22
            // Value at index 2 is: 33
            // Value at index 3 is: 44
            // Value at index 4 is: 55
            // Value at index 5 is: 66
        });
        
 
    BREAK AND CONTINUE
    break:
        these are used to break a loop. when certain condition is met inside the loop, we can use the break statement to stop the loop
        syntax:
            break;
            
        example:
            var test = [1,5,3,2,7,88];
            
            for(var i = 0; i < test.length; i++){
                // check if the value at that index of array test is 2
                // then break off from the loop
                if(test[i] === 2){
                    break;
                }
                
                console.log(test[i]);
            }
            
            
    continue:
        these are used to restart the loops. these are mainly used in while and do...while statements.
        syntax:
            continue;
        
        example:
            var i = 0;
            var name = 'Viswa';
            
            // server call
            
            while(i < 10){
                i++;
                
                if(name === 'Srikar'){
                    continue;
                }
            }
______________________________________________________________________________________________________________________
            
CONDITIONS IN JS
            
      1. if else statements
         the basic idea behind this is to check for a condition. 
         If that condition is true then perform some logic
         if that condition is false then perform some different logic
         
         syntax:
            if(<condition>){
                // logic to be executed if <condition> is true
            }
            else{
                // logic to be executed if <condition> is false
            }
         *** else block is optional  
         *** <condition> should always return boolean output (true or false)
         
      2. switch statements
         these are used to define several cases of the condition
         syntax:
         switch(<condition>){
            case <match the condition>: {
                // logic
            }
                break;
            default: {
                // logic if all the cases fail
            }    
         }
         
      3. if elseif else statements
         these are similar to if else but when create more else scenarios
         syntax:
         if(<condition>){
            // logic if <condition> is true
         }
         else if(<condition2>){
            // logic if <condition2> is true
         }
         else{
            // logic if both <condition> and <condition2> are false
         }
         *** it is highly advised that we write the else block when we are writing the elseif statements   
        
*** to set a debugging breakpoint from the js file, we use 'debugger;' in the code. 
    MAKE SURE TO REMOVE ALL THE 'debugger;' STATEMENTS BEFORE PUSHING YOU CODE TO GIT!!!
    
*** what is the difference between =, ==, === in js?
    
    =   -> this means that we are setting a value to a variable
    ==  -> this means to check if the left hand side is equal to right hand side regardless of its type
    === -> this means to check if the left hand side is equal to right hand side both by data and by type