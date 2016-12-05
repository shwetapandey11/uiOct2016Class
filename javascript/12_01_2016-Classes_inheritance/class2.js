// IIFE CONSTRUCT
(function(){

    function substract(greater, lesser){
        // to convert a function into a class, we use 'this' keyword inside the function
        this.output = (greater - lesser);

        this.result = {
            firstName: 'Srikar'
        };


        this.result2 = {
            lastName: 'Shastry'
        }


    }
    /*
        substract = {
            output: (greater - lesser),
            result: {
                firstName: 'Srikar'
            },
            result2: {
                lastName: 'Shastry'
            }
        }
    */

    var alpha = new substract(5,2);

    /*
        var alpha = {
            output: 3
        };
    */
    alpha.output = 'Srikar';
    alpha.output2 = 55;

    console.log(alpha);



})();