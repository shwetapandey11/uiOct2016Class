var x = {
    firstName: 'Srikar',
    isPresent: false,
    isSuspended: null,
    rollNumber: 66,
    y: {
        lastName: 'Shastry',
        rollNumber: 55,
        z: {
            fullName: 'Srikar Shastry',
            rollNumber: 100
        }
    }
};

var y = {
    firstName: 'Bhaskar',
    rollNumber: 99
};

x.y.rollNumber = 111;
y.rollNumber = 222;



var a = {
    firstName: 'Srikar',
    lastName: 'Shastry',
    rollNumber: 33
};

// i want to change the first name 'srikar' to 'viswa'
// dot notation
// this is the preferred way of updating any properties
x.firstName = 'Viswa';
// x -> y -> lastName
x.y.lastName = 'Kandi';
// x -> y -> z -> fullName
x.y.z.fullName = 'Viswa Kandi';

console.log(x);


// property notation
// the drawback of property notation is that we cannot target the inner objects.
// property notations are used to update the primitive data types only.
x['firstName'] = 'Bhumika';

// x -> y -> lastName
// TODO: THIS WILL NOT WORK
//x['y['lastName']'] = 'Sirisha';
x.y['lastName'] = 'Sirisha';

// x -> y -> z -> fullName
// TODO: THIS WILL NOT WORK
//x[y[z['fullName']]] = 'Somu';
x.y.z['fullName'] = 'Somu';

console.log(x);
console.log(y);







