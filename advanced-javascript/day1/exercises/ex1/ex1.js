(function(window) {

	function C() {
		console.log("OOPS");
	}
	function E(f) {
		console.log("E");
		f();
		// var f = F;
	}

	function A() {
		console.log("A");
		B();
	};

	function G() {
		console.log("G");

		var H = function() {
			console.log("H");
			I();
		};

		H();
	}

	var D = d;

	function d() {
		console.log("D");
		E(f);
	}

	function I() {
		console.log("I");
		J();
		J();
	}

	B = function() {
		console.log("B");
		C();
	};
	

	function f() {
		console.log("F");
		G();
	};

	var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			obj[rest[i]] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					 obj[rest[i + 1]]();
					// TODO: call the next function
				}
			};
		})(i);
	}

	function J() {
		J = function() {
			console.log("J");
			obj.K();
		};
	};

	function C() {
		console.log("C");
		D();
	};

	return A;
})(window)();