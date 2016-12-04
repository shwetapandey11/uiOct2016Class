(function(){

    // this class is now an object that can be reused any number of times
    function x(){
        this.firstName = 'Srikar';
        this.lastName = 'Shastry';
        this.rollNumber = 2;
    }

    /*
        x = {
            firstName: 'Srikar',
            lastName: 'Shastry',
            rollNumber: 2
        };
    */

    var z = new x();
    z.firstName = 'Bhaskar';
    z.isPresent = function(){
        return false;
    };

    var test = z;
    test.firstName = 'John';

    //console.log(z);
})();