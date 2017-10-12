// conseptual thing - HOISTING
// a and b hoisted, so they will be undefined in 1-2 lines
//
console.log(a); 
console.log(b);
var a = b; // here still undefined
var b = 2;
console.log(b);
console.log(a);

// Mutual recursion - two or more functions call each other.
// It is impossible to make mutual recursion without hoisting.
