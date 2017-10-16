function foo() {
	console.log(this.a);
}

function doFoo(fn) {
	// var a = 32;

	fn();
}

var obj = {
	a: 2,
	foo: foo
};

var a = "haha";
console.log(this.a);

doFoo(obj.foo);
