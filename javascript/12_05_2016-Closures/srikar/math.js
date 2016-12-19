// IIFE CONSTRUCT
(function(){

    // class - Mathematics
    function Mathematics(num1, num2){
        // reference the 'this' keyword
        var math = this;

        math.sum = function(){
            return (num1 + num2);
        };

        math.difference = function(){
            return (num1 - num2);
        };

        math.multiplication = function(){
            return (num1 * num2);
        };

        math.division = function(){
            return (num1 / num2);
        };
    }

    // class - Total
    function Total(){
        // reference the 'this' keyword
        var tot = this;

        // create a new instance of Mathematics
        var operations = new Mathematics(100,20);

        tot.addition = operations.sum();
        tot.substract = operations.difference();
        tot.product = operations.multiplication();
        tot.dividend = operations.division();


    }

    // create a new instance of Total
    var result = new Total();

    console.log(result);

})();




























