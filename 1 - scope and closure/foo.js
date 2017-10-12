// SCOPE MANAGER
//
// This is two statements.
// Creating(Var declaration) and initialization of var
// Global scope
// LHS - foo, RHS - "bar"
var foo = "bar";

// Global scope
// Function declaration
// JITC - Just-in-time compilation
// naively compile top-to-down
function bar() {
	// scope of 'bar'
	// new declaration
	var foo = "baz";
}

// function declaration
// Global scope
// 'foo' also declaration(like var foo) in the scope of 'baz'
function baz(foo) {
	// in the scope of 'baz'(in the declaration)
	foo = "bam";
	// no bam in local scope, then go to upper scope - global
	// Global scope, says: I've just created it(not in strict mode)
	bam = "yay";
}

// in the execution phase remove var's
// LHS - left-hand-side, RHS - right-hand-side of assignment(=)
// LHS is TARGET, RHS - is SOURCE

console.log(foo);
// console.log(bam);
baz();
console.log(bam);
bar();
console.log(foo);
