// LET - block scope(ES6+)
// actually, variabled(declared as 'var') are attached to the function scope,
// but LET keyword lets us to declare them in block
function foo() {
	var bar = "bar";
	// only attached to FOR loop
	// if it would be 'var', it would be attached to 'foo' scope
	for (let i = 0; i < bar.length; i++) {
		console.log(bar.charAt(i));
	}
	console.log(i); // ReferenceError
}

function foo2(bar) {
	// explicit block
	// REJECTED in ES6
	// let (baz = bar) {
	//	console.log(baz); // "bar"
	// }
	// Solution for rejection
	{
		let baz = bar;
		console.log(baz);
	}
	console.log(baz); // Error
}

// foo();
foo2();

// Kyle's let-er complies code to try catch block,
// since catch, behaves as a let block
