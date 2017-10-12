var person = (function(myName) {
	var name = myName;

	return {
		getName: function() {
			return name;
		},
		setName: function(val) {
			name = val;
		},
		sayHello: function() {
			console.log('Hello ' + name);
		}
	}
})('Aibol');

console.log(person.getName());
person.sayHello();
person.setName('Aibar');
person.sayHello();
