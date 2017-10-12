function x(o) {
	o.a = o.a + 5;
	o = {
		a: 20
	};
}

var obj = {a: 1};
x(obj);
// console.log(obj.a);
//

var test3 = function() {
	var i = 0;
	for (var i = 0; i < 10; i++) {
		var j = i;
	}
	console.log(i + j);
}
// test3();

var o = {
        x: 8,

        valueOf: function(){
            return this.x + 2;
        },

        toString: function(){
            return this.x.toString();
        }
    };

console.log('9'+o)
console.log(o+9)
console.log(o < "9"); // false, since valueOf(=10) called
