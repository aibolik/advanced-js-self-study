// Lexical scope - compile time scope
// Dynamic scope - 

function foo() {
	var bar = "bar";

	function baz() {
		console.log(bar); // lexical!
	}
	baz();
}

foo();
