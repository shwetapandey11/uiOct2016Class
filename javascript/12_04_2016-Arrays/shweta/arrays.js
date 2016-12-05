// IIFE construct

(function(){

	var myArr = ["white","black","yellow","blue"];
	console.log(myArr);
	console.log(myArr.length);
	console.log(Array.isArray(myArr));

	myArr.push('pink');
	console.log(myArr);

	myArr.shift();
	console.log(myArr);

	myArr.push('orange');
	console.log(myArr);

	myArr.pop();
	console.log(myArr);

	myArr.unshift('purple');
	console.log(myArr);

	console.log(myArr.join());
	console.log(myArr.join(' '));
	console.log(myArr.join(' and '));

	myArr.splice(2,1);
	console.log(myArr);

	console.log(myArr.sort());

	console.log(myArr.indexOf('blue'));
	console.log(myArr.indexOf('violet'));

	console.log(myArr.reverse());

})();