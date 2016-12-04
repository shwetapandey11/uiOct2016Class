OBJECTS


objects are special type of data type.
inside these objects, we can call all the primitive data types.
it gives us the power of creating our own structure of data types

    syntax:
    var x = {
        <property> : <value of the property>
    };

    example:
    var x = {
        firstName: 'Srikar',
        rollNumber: 25,
        isPresent: false,
        isSuspended: null,
        y: {
            lastName: 'Shastry',
            rollNumber: 55,
            z: {
                fullName: 'Srikar Shastry',
                rollNumber: 100
            }
        }
    };


x - > rollNumber(25) - > (66)
x - > y - > rollNumber(55)
x - > y - > z - > rollNumber (100)

Now, "x" is an object that holds four primitive data types.
The "{" and "}" are called as Object-literals

***There is a difference between variable and property.
Variable hold the entire object
Property is one entity of the object


*** Dont put comma to the last property. Comma means there will be another property.




    UPDATING PROPERTIES
    
    There are two ways of updating the properties of an object:
    1. dot notation
    2. property notation
    
    dot notation:
    x.firstName = 'Test';
    // anything before dot(.) can be property or variable itself
    // but anything after dot(.) is always the property
    
    property notation:
    x['firstName'] = 'Test';














