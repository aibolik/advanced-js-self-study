// Every function, while executing, has a reference to
// its current execution context, called THIS.

function foo() {
	console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

// 4. Ddefault binding rule(catch all rule) - 
// 	if you are in 'strict mode', `this` refers to undefined
// 	if you are not in 'strict mode', `this` refers to global scope.
// 3. Implicit binding - has an owning or containing context object at
// the callsite. o2.foo() will take its `this` as 'o2'
console.log('--- Default binding ---');
foo();
console.log('--- Implicit binding ---');
o2.foo();
o3.foo();

// 2. Explicit binding rule - those are binded using `call` or `apply`
console.log('--- Explicit binding ---');
foo.call({bar: "explicit"});
foo.apply({bar: "explicit apply"});
foo.call(12);

// Hard binding(it is Explicit binding - solves problem with losing 
// `this` in setTimeout. It hardly binds `this` object to 
// itself(looks like closure).
// This is actually implementation of `Function.prototype.bind` in ES5.
console.log('--- Hard binding in explicit binding ---');
var obj = {
	bar: "hard binding"
}
var bar = function() {
	foo.call(obj);
}

bar();
setTimeout(bar, 100);

bar.call({bar: "BAR"});


console.log('--- new Binding ---');
// 1. new Binding - when we create object with new FuncName(), `this` is 
// assigned to this object. 
function foo2(a) {
	this.a = a;
}
var bar3 = new foo2(2);
console.log(bar3.a);
