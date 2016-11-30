// IIFE CONSTRUCT
(function(){
    var global = 100;


    function addition(){
        var local = 10;

        console.log(global); // 100
        console.log(local);  // 10
    }

    addition();

    console.log(global); // 100
})();