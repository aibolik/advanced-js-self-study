// Function declaration and function expression
//
// It is not a function declaration. It is a function expression.
// DECLARATION - 'function' keyword, very first word in the statement
// Mostly, function expression is anonymous function
// This is name function expression
// 'bar' name get not declared in the scope
// it is in own scope
//
// Why should name function expression
// 1. Reference to itself
// 2. Play well on debugging than anonymous
// 3. Self-documented(name)
var foo = function bar() {
	var foo = "baz";

	function baz(foo) {
		foo = bar;
		foo;
	}

	baz();
};

foo();
bar(); // Error!
