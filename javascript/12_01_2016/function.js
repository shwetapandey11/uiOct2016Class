(function(){

    // sample function
    function addition(fName,lName){
        var x = {
            firstName: fName,
            lastName: lName
        };
        return x;
    }

    var output = addition('srikar','shastry');
    var output2 = addition();

    // result
    /*
        output = {
            firstName: 'srikar',
            lastName: 'shastry'
        };
    */
})();