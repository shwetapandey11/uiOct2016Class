ARRAYS

Arrays are special type of objects.
*** ARRAYS ARE NOT A DATA TYPE

These are collection of like-wise entities(datatypes)
These are collection of similar type of data


    Syntax:
    
    var x = []; // this is an empty array
    
    var y = [ 'Srikar' , 'Shastry' , 'Bhumika' , 'Viswa' , 'Raman' , 'Neha' , 'Anusha' ];
    
    var z = [1 , 55, 77, 88, 99];
    
    var alpha = 
    [{
        firstName: 'Srikar',
        lastName: 'Shastry'    
    },{
        firstName: 'Viswa',
        lastName: 'Kandi'    
    }];
    
    
    var beta = ['Srikar',55,false,null];
    
    
Length of the arrays = number of indexes.
*** The indexes start from 0
________________________________________________________________________

*ARRAYS ARE INHERITED FROM ARRAY() CLASS

    Array() class has certain properties:
    1. isArray()
        this checks if the variable is an array or not. This returns TRUE or FALSE
        syntax:
            Array.isArray(<variable>);
        example:
            var omega = ['Srikar','Shastry'];
            Array.isArray(omega); // true
            
    2. length
        this outputs the length of the array
        syntax:
            <variable>.length;
        example:
            var omega = [1,66,44,99,100];
            omega.length; // 5
            
    3. push
        this allows us to add an index entry at the end of the array
        syntax:
            <variable>.push(<value>);
        example:
            var omega = ['Srikar','Shastry'];
            omega.push('Viswa'); // ['Srikar','Shastry','Viswa']
            
    4. pop
        this allows us to remove an index entry from the end of the array
        syntax:
            <variable>.pop();
        example:
            var omega = ['Srikar','Shastry','Viswa'];
            omega.pop(); // ['Srikar','Shastry']
            
    5. unshift
        this allows us to add an index entry at the front of the array  
        syntax:
            <variable>.unshift(<value>);
        example:
            var omega = ['Srikar','Shastry'];
            omega.unshift('Viswa'); // ['viswa','Srikar','Shastry']  
            
    5. shift
        this allows us to remove an index entry at the front of the array  
        syntax:
            <variable>.shift();
        example:
            var omega = ['Srikar','Shastry'];
            omega.shift(); // ['Shastry']  
              
    6. splice
        this allows us to add/remove an index entry at a certain location in the array
        syntax:
            <variable>.splice(<index>, <number of entries to replace>, <value>)  
        example:
            var omega = ['Srikar','Viswa','Raman'];
            // to add 'Shastry' @ index 1
            omega.splice(1,0,'Shastry');
            
            // to remove 'Viswa' from the index 1
            omega.splice(1,1);
            
    7. indexOf()
        this allows us to findout at what index a particular data exists
        syntax:
            <variable>.indexOf(<value>);
        example:
            var omega = ['Srikar','Shastry','Sirisha'];
            omega.indexOf('Sirisha'); // 2
        
        *** indexOf() doesnot support objects or arrays
            
            
    8. concat
        this is used to merge two arrays
        syntax:
            <array1>.concat(<array2>);
        example:
            var omega = ['Srikar','Shastry'];
            var delta = ['Viswa','Kandi'];
            
            var beta = omega.concat(delta); // ['Srikar','Shastry','Viswa','Kandi'];
            
    9. filter
        this is used to filter out the data inside the array
        syntax:
            <array>.filter(<condition>);
        
    10. join
        this combines all the values inside the array
        syntax:
            <array>.join()
        example:
            var omega = ['Srikar','Shastry','Somu'];
            omega.join(' % '); // 'Srikar % Shastry % Somu'
            
     
            
     





















