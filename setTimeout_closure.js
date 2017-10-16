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
		setTimeout(c, i * 1000);
	})(i);
	i++;
}
