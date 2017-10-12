function count() {
	var i = 0;

	return function() {
		console.log(++i);
	};
}

var c = count();

var i = 0;
while(i < 10) {
	(function(i) {
		setTimeout(c, 1000);
	})(i);
	i++;
}
