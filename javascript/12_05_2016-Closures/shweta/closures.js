// IIFE Construct
(function(){
	function total(){
		var myVar = this;

		function mathematics(a,b){			
			var myVar2 = this;
			myVar2.sum = function(){
				return (a + b);
			}
			myVar2.difference = function(){
				return  (a - b);
			}
			myVar2.multiplication = function(){
				return (a * b);
			}
			myVar2.division = function(){
				return (a / b);
			}
		}

		var m = new mathematics(5,3);
		myVar.addition = m.sum();
		myVar.substract = m.difference();
		myVar.product = m.multiplication();
		myVar.dividend = m.division();

		console.log (myVar.addition);
		console.log (myVar.substract);
		console.log (myVar.product);
		console.log (myVar.dividend);	
	}
	var answer2 = new total();
} )();
