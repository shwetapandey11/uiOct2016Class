// IIFE Construct
(function(){
    // defining a function
    function addition(a, b){
        var sum = a + b;

        return sum;
    };

    // calling a function
    var output = addition(55, 77);

    console.log(output); // 132

})();