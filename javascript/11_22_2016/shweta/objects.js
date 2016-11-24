var object1 = {
	age: 50,
	address: '1000 wall street',
	cell: '000-000-0000',
	object2: {
		age: 60,
		gender: 'male',
		object3: {
			age: 70,
			gender: 'female'
		}
	}
};

var object2 = {
	age: 80
}

object1.object2.object3.age = 100;

console.log(object1.object2.object3.age);