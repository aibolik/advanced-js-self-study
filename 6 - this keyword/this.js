// Every function, while executing, has a reference to
// its current execution context, called THIS.

function foo() {
	console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

// 4. default binding rule(catch all rule) - 
// 	if you are in 'strict mode', `this` refers to undefined
// 	if you are not in 'strict mode', `this` refers to global scope.
// 3. implicit binding - has an owning or containing context object at
// the callsite. o2.foo() will take its `this` as 'o2'
foo();
o2.foo();
o3.foo();
