var bar = "bar";

function foo(str) {
	// DON"T USE EVAL
	eval(str); // cheating!
	console.log(bar); // 42
}

foo("var bar = 42;");
