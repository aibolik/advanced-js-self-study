// theoretical dynamic scoping
// Looks for 'bar' not in upper scope mode,
// but it looks for execution stack
//
// It is runtime decision,
// rather than in lexical scoping, author time decision
function foo() {
	// okay if called in 'baz'
	console.log(bar); // dynamic!
}

function baz() {
	var bar = "bar";
	foo();
}

baz();
