//Main JS

var Person = function (firstName) {
  this.firstName = firstName;
};

var SecondPerson = function (firstName) {
  this.firstName = firstName;
};

Person.prototype.sayHello = function() {
  console.log("Hello, I'm " + this.firstName);
};

Person.prototype.sayBye = function() {
  console.log("Bye, I'm" + this.firstName);
};

Person.prototype.sayGoodBye = function(){
  console.log("Goodbye!");
};

var person1 = new Person("Alice");
var person2 = new Person("Bob");


var dynamicName = "test dynamic name";


var test = new Person(dynamicName);
var helloFunction = person1.sayHello;


