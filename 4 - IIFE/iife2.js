var foo = "foo";

// passed as bar
// can be aliased
(function(bar) {
	
	var foo = bar;
	console.log(foo);

})(foo);

console.log(foo);
