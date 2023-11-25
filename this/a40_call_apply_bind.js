// call doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// apply doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// bind doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

// Create an object
const person = {
    firstName: "John",
    lastName: "Doe",
};

// Define a function
function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

// Using call
greet.call(person, "Hello"); // Output: Hello, John Doe

// Using apply
const args = ["Hi"];
greet.apply(person, args); // Output: Hi, John Doe

// Using bind
const boundGreet = greet.bind(person, "Hey");
boundGreet(); // Output: Hey, John Doe
