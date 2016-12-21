// IIFE CONSTRUCT
(function(){
    // to access an element - h1, we can use a in build object call, named as 'getElementById'
    //var x = getElementById('heading');

    var alpha = document.getElementById('heading2');
    console.log(alpha);

    var beta = document.getElementsByClassName('test');
    console.log(beta[3]);

    var theta = document.getElementsByTagName('p');
    console.log(theta);

    var gamma = document.querySelectorAll('[data-srikar="viswa"]');
    console.log(gamma);

    var penta = document.querySelector('p');
    console.log(penta);
})();


/*
    window = {
        document: {
            getElementById: function(){

            },
            getElementsByClassName: function(){

            }

        }
    }

*/