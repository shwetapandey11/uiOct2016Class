(function(){
    var alpha =
    [{
        firstName: 'Srikar',
        lastName: 'Shastry'
    },{
        firstName: 'Viswa',
        lastName: 'Kandi'
    }];


    var beta = ['Srikar', 55, false, null]; // beta has four indexes which means the length of beta is 4

    var theta = [ 'Srikar' , 'Shastry' , 'Bhumika' , 'Viswa' , 'Raman' , 'Neha' , 'Anusha' ];

    //console.log(theta); // Anusha
    //console.log(alpha[1]); // {firstName: 'Viswa', lastName: 'Kandi'}
    //console.log(alpha[0].firstName); // Srikar

    var omega = new Array();

    omega[0] = 'Srikar';
    omega[1] = 'Shastry';
    omega[2] = 'Viswa';
    omega[3] = 'Kandi';

    //console.log(omega);

    var delta = 55;

    console.log(Array.isArray(omega)); // true
    console.log(Array.isArray(delta)); // false


    console.log(omega.length); // 4

    /*_____________________________________________________________________________*/


    var a = ['Srikar','Shastry','Anusha','Bhaskar','Neha','Sarika','Raman','Viswa'];
    a.push('Bhumika');
    alpha.push({
       firstName: 'Bhaskar',
       lastName: 'Yasani'
    });

    console.log(a);
    console.log(alpha);

    var b = ['Srikar','Shastry','Anusha','Bhaskar','Neha','Sarika','Raman','Viswa'];
    b.pop();

    console.log(b);

    var c = ['Neha','Harsha'];
    c.unshift('Somu');

    console.log(c);

    var d = ['Viswa','Srikar','Shastry'];
    d.shift();

    console.log(d);


    var names = ['Srikar','Bhumika','Harsha','Deepika','Raman','Anusha'];
    // to add:
    //names.splice(1,0,'Shastry');

    // to remove:
    names.splice(4,1);

    console.log(names);


    var e = ['Srikar','Srikar','Srikar','Deepika','Raman','Deepika'];

    console.log(e.indexOf('Deepika'));


    /*___________________________________________________________________________________*/

    var f = ['Srikar','Shastry'];
    var g = [22,99];

    var h = f.concat(g);
    console.log(h);

    /*___________________________________________________________________________________*/
    // this function will check for value. if it is not equal to 'Srikar' then return true or else false
    function filterOut(value){
        // check if value is NOT equal to 'Srikar'
        return (value !== 'Srikar'); // return true or else false
    }

    var i = ['Srikar','Viswa','Deepika','Srikar','Srikar'];

    var j = i.filter(filterOut);
    console.log(j);

    /*
        j = ['Viswa','Deepika'];
    */
    /*__________________________________________________________________________________*/

    var arrayToBeJoined = ['Srikar','Shastry','Viswa','Kandi'];

    console.log(arrayToBeJoined.join()); // 'Srikar , Shastry , Viswa , Kandi'

    console.log(arrayToBeJoined.join(' , ')); // 'Srikar , Shastry , Viswa , Kandi'

})();