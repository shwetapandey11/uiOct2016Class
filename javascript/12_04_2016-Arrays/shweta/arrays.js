// IIFE construct

(function(){

	var myArr = ["white","black","yellow","blue"];
	console.log(myArr);
	console.log(myArr.length);
	console.log(Array.isArray(myArr));
	console.log(myArr[2]);

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

	var myArr2 = new Array();
	myArr2[0] = 2;
	myArr2[1] = 6;
	myArr2[2] = 10;
	myArr2[3] = 14;
	myArr2[4] = 20;
	myArr2[5] = 30;

	console.log(myArr2.length);
	console.log(myArr2);
	console.log(myArr2.sort(function(x,y) {
		return (x-y);
	}));
	console.log(myArr2.sort(function(x,y) {
		return (y-x);
	}));

})();


