(function(){
    var alpha = 100;

    function addition(){
        var alpha = 10;

        this.substract = function(){
            console.log(alpha); // 10
        }

    }

    console.log(alpha); // 100
    var output = new addition();
    output.substract();
    //console.log(local); // this is error because the scope of local is only within that function.
                          // we are trying to access is out side the function

    /*____________________________________________________________________________________________________*/

    function sum(){
        var _sum = this; // always create an alias for 'this' keyword
        _sum.a = 1;
        _sum.b = 2;
        _sum.c = _sum.a + _sum.b;

        _sum.difference = function(){
            var _diff = this; // always create an alias for 'this' keyword
            _diff.a = 5;
            _sum.a = 6;

            return (_sum.a - _diff.a); // 6 - 5
        }
    }

    var result = new sum();
    console.log(result.c);
    console.log(result.difference());


    /*
        sum = {
            a: 6
            difference: {
                a: 5
            }
        }
    */
})();





