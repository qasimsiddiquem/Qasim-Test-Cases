test.sayHello();

person1.sayGoodBye();

function bye() {
  console.log('bye bye');
  
  function testBye() {
    console.log('testBye');
  };
  testBye();
};

bye();

// logs "Hello, I'm Alice"
person1.sayHello();

// logs "Hello, I'm Bob"
person2.sayHello();

// logs "Hello, I'm undefined" (or fails
// with a TypeError in strict mode)
helloFunction();                                    

// logs true
console.log(helloFunction === person1.sayHello);

// logs true
console.log(helloFunction === Person.prototype.sayHello, 'Proto');

// logs "Hello, I'm Alice"
helloFunction.call(person1);
