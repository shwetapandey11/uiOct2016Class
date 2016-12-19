REGEX - REGULAR EXPRESSIONS
these a set of rules that will define how our strings needs to work.

STRINGS



Strings are one type of primitive data type which has some special set of methods/operations available for us.

    1. String Concatenation
        this means we want to merge one string with the other.
        We use the '+' symbol to merge two strings
        example:
        
        var text1 = 'Hello ';
        var text2 = 'World';
        
        var ouput = text1 + text2; // output = 'Hello World'
        
        *** remember, if any one of the two variables is a string type then, string concatenation takes place.
        if both the variables are numbers then it will perform math addition.
        
    2. length
        similar to array.length, strings also provide us the length or number of characters inside the string.
        example:
        var test = 'Srikar';
        
        console.log(test.length); // 6
        
    3. replace
        using the concepts of regular expressions (regex), 
        we can replace one character or set of characters inside a string with other value
        example:
        var name = 'Srikar Shastry';
        var newName = name.replace(/Srikar/g,'Test');
        
        console.log(newName); // Test Shastry
        
    4. charAt
        this is used to find whether a particular index in the string has that particular character
        example:
        var name = 'Srikar';
        
        name.indexOf(x); // output: -1
        
        if(name.charAt(0) === 'S'){
            var name2 = 'srikar';
            
            console.log(name2);
        }
        *** the index starts from 0
        
    5. concat
        this is used to concat(merge) more than two strings
         example:
         var name = 'Srikar';
         var newName = name.concat(' ', 'Shastry', ' ', 'is doing great');
         
         console.log(newName); // Srikar Shastry is doing great
        
    6. substr()
        this is used to trim off certain charactes from the string
        syntax:
        <string>.substr(<starting index> , <number of characters from that index>);
        example:
        
        var name = 'Srikar Shastry';
        var newName = name.substr(3,2);
        
        console.log(newName); // ka
        
        *** there is a difference between substr() and substring()
        substr() takes two arguements, first being the starting index and second is the number of characters from that index
        substring() takes two arguements, first being the starting index and second being the ending index
        
    7. split
        this converts the string into an array of strings based on the character we pass
        syntax:
        <string>.split(<the character which will be treated as divider>);
        
        example:
        var name = 'Srikar Shastry is a good man';
        console.log(name.split(' ')); // output = ['Srikar','Shastry','is','a','good','man'];