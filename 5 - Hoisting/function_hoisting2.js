// will result in "foo",
// since multiple declaration of functions override each other
foo();

// this one is ignored, since foo is already defined and declared
var foo = 2;

function foo() {
	console.log("bar");
}

function foo() {
	console.log("foo");
}
