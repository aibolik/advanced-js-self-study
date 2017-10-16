foo();

function foo() {
	console.log(1);
}

foo = function() {
	console.log(3);
}
foo();

function foo() {
	console.log(2);
}
