// function declaration also get hoisted to the top
// so here, compiler would declare 'b' with whole its body.
// But, function expression would not. It would declare 
// variable 'd', but it would not declare its value, so it would be
// undefined.

// here 'a' would get the return value of b(), that returns 'c'.
// That is in its place was created but not assigned yet, so that is undefined.
var a = b(); // undefined
var c = d(); // error, since 'd' is not a function here.
a;
console.log(a);
c;
console.log(c);

function b() {
	return c;
}

var d = function() {
	return b();
};

