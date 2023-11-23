// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

// Creating instances of the Person object
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Calling the greet method on the instances
person1.greet(); // Output: Hello, my name is John and I am 25 years old.
person2.greet(); // Output: Hello, my name is Jane and I am 30 years old.

// The prototype object is shared among ALL instances of Person
console.log(person1.__proto__ === person2.__proto__); // true

// Adding a property to the Person prototype
Person.prototype.farewell = function () {
    console.log(`${this.name} has left the building. Bye for now!`);
};

// person1 and person2 can access the farewell method
person1.farewell(); // Output: John has left the building. Bye for now!
person2.farewell(); // Output: Jane has left the building. Bye for now!

// The prototype also contains the properties of the default Object object
console.log(person1.__proto__.__proto__ === Object.prototype); // true

// And the prototype of the default Object object is null
console.log(person1.__proto__.__proto__.__proto__); // null

// Prototypes with simple objects
const simpleObj = {};
console.log(simpleObj.__proto__ === Object.prototype); // true

// Prototypes with functions
const simpleFunc = function () {};
console.log(simpleFunc.__proto__ === Function.prototype); // true
console.log(simpleFunc.__proto__.__proto__ === Object.prototype); // true

// Prototypes with arrays
const simpleArr = [];
console.log(simpleArr.__proto__ === Array.prototype); // true
console.log(simpleArr.__proto__.__proto__ === Object.prototype); // true

// Prototypes with strings
const simpleStr = "";
console.log(simpleStr.__proto__ === String.prototype); // true
console.log(simpleStr.__proto__.__proto__ === Object.prototype); // true

// Prototypes with numbers
const simpleNum = 1;
console.log(simpleNum.__proto__ === Number.prototype); // true
console.log(simpleNum.__proto__.__proto__ === Object.prototype); // true

// Prototypes with booleans
const simpleBool = true;
console.log(simpleBool.__proto__ === Boolean.prototype); // true
console.log(simpleBool.__proto__.__proto__ === Object.prototype); // true

// Prototypes with dates
const simpleDate = new Date();
console.log(simpleDate.__proto__ === Date.prototype); // true
console.log(simpleDate.__proto__.__proto__ === Object.prototype); // true
