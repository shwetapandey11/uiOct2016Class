// IIFE CONSTRUCT
(function(){

    function substract(greater, lesser){
        return {
            output: (greater - lesser)
        };
    }


    var alpha = substract(5,2); // result now holds an object with property out
    /*
        var alpha = {
            output: 3
        };
    */

    var beta = Object.create(alpha); // beta is now inheriting the properties of alpha

    beta.output2 = 55;
    beta.output = 44;

    /*
        var beta = {
            output: 44,
            output2: 55
        }
    */

    console.log(beta);

    var theta = Object.create(beta);
    theta.output = 'Srikar';
    theta.output2 = 'Shastry';

    /*
        var theta = {
            output: 'Srikar',
            output2: 'Shastry'
        };
    */
    console.log(theta);


    var gamma = beta;

    /*
        var gamma is equivalent to beta. meaning both share the same bridge.
        if gamma is changed, beta will be changed also.
        if beta is changed, gamma will be changed too.
    */
    gamma.output2 = 100;
    console.log(gamma);

    beta.output = 99;

    console.log(gamma);
})();