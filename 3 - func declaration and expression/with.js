var obj = {
	a: 2,
	b: 3,
	c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
	a = b + c;
	c = b - a;
	// no reference for 'd' in 'obj'
	// create 'd' in global scope
	d = 3;
}

console.log(obj.d); // undefined
console.log(d); // 3 -- oops!
