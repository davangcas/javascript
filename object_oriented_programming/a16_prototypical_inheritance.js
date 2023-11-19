// Parent object
const parent = {
    name: "Parent",
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    },
};

// Child object
const child = Object.create(parent);
child.name = "Child";
child.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
};

// Test the inheritance
parent.sayHello(); // Output: Hello, I'm Parent
child.sayHello(); // Output: Hello, I'm Child
child.sayHi(); // Output: Hi, I'm Child

// The child object has access to the parent's properties
console.log(child.name); // Output: Child

// The parent object does not have access to the child's properties
console.log(parent.sayHi); // Output: undefined

// The child object has access to the parent's methods
console.log(child.sayHello === parent.sayHello); // Output: true

// new prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

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

// New prototype child from parent
function YoungPerson(name, age) {
    Person.call(this, name, age);
}

YoungPerson.prototype = Object.create(Person.prototype);

YoungPerson.prototype.constructor = YoungPerson;

YoungPerson.prototype.greet = function () {
    console.log(`Yo, my name is ${this.name} and I am ${this.age} years old.`);
};

const youngPerson1 = new YoungPerson("John", 25);
const youngPerson2 = new YoungPerson("Jane", 30);

youngPerson1.greet(); // Output: Yo, my name is John and I am 25 years old.
youngPerson2.greet(); // Output: Yo, my name is Jane and I am 30 years old.
