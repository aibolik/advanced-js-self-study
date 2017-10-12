// GLOBAL SCOPE
// declaration
var foo = "bar";

// function declaration
// GLOBAL SCOPE
function bar() {
	// Scope of 'bar'
	// new declaration
	var foo = "baz";

	// Scope of 'bar'
	// function declaration
	// 'foo' - implicit declaration in scope of 'baz'
	function baz(foo) {
		// Hey scope of 'baz', do you have 'foo'
		// Yes, in declaration(local foo)
		foo = "bam";
		// hey, scope of 'baz', do you have LHS of 'bam'?
		// No, go to upper -> go to Global and create
		bam = "yay";
	}
	// Hey Scope of 'bar', we have RHS reference to var called 'baz'
	// Yes, that was declared. Let's execute
	baz();
}

// execute the function, that we retrieved in Global Scope
//
bar(); // this is RHS, because it is not LHS :D
foo; // "bar"
bam; // "yay", because called bar()
baz(); // there is no RHS of 'baz', ReferenceError

// if not declared for:
// 	LHS - created in global scope
// 	RHS - ReferenceError

