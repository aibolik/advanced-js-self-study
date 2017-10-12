var foo = "foo";

// it is IIFE pattern
// Immediately invoked function expression
// recommended to name IIFE functions
(function() {
	
	var foo = "foo2";
	console.log(foo); // "foo2"
})();

console.log(foo); "foo"
