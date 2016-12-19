// IIFE Construct
(function(){

    var test = [55,33,7767,23234,565,34234,8798,234,767,23423,333,6666,1111,777,888,333,233343,7778,9876];

    if(test[10] === 777){
        console.log('output is 777');
    }
    else if(test[10] === 666){
        console.log('output is 666');
    }
    else if(test[10] === 3333){
        console.log('output is 3333');
    }
    else{
        console.log('output was not determined');
    }

    /*for(var x = 0; x < test.length; x++){
        console.log(test[x]); // x = 0 => test[0] = 55;
                              // x = 1 => test[1] = 33;
        if(test[x] === 565){
            break;
        }
    }

    test.forEach(function(value,index){
        console.log('At ' + index + ' index, the value is: '+ value);
    });*/

    /*
    var test2 = {
        "firstName": 'Srikar',
        "lastName": 'Shastry',
        "rollNumber": 66
    };
    for(var x in test2){
        console.log(test2[x]); // test2["firstName"] => 'Srikar'
                               // test2["lastName"] => 'Sbastry'
    }*/


})();
