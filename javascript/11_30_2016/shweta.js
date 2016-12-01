// Wrapping the whole js document by using IIFE contstruct to prevent memory leaks..
(function() {

	// Definining a literal object..
	var objLiteral = {
		x: 100,
		y: "string",
		n: null,
		u: undefined,
		b: true
	};

	// Logging the object literal's propeties..
	console.log("objLiteral.x = " + objLiteral.x);
	console.log("objLiteral.y = " + objLiteral.y);
	console.log("objLiteral.n = " + objLiteral.n);
	console.log("objLiteral.u = " + objLiteral.u);

	// Updating some of the propertiles of the objLiteral using dot notation..
	objLiteral.x = 200;
	objLiteral.y = "newString";

	// Logging the updated properties...
	console.log("Updated objLiteral.x = " + objLiteral.x);
	console.log("Updated objLiteral.y = " + objLiteral.y);

	// Updating some of the properties of the objLiteral using square notation..
	objLiteral["x"] = 200;
	objLiteral["y"] = "newString";

	// Logging the updated properties once more...
	console.log("Updated objLiteral[x] = " + objLiteral.x);
	console.log("Updated objLiteral[y] = " + objLiteral.y);

	// Named function..
	(function myFunc(){
		var b = false;
		console.log("var b inside function myFunc = " + b);
	})();

	//console.log("objLiteral.b outside function myFunc = " + b);

	// Another function that takes arguments..
	function multiplication(a,b) {
		multiple = a * b;
		console.log("result of multiplication function = " + multiple)
		return (multiple);
	}

	multiplication(5,19);

})();