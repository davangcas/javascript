// Logging messages
console.log("This is a log message"); // Outputs a log message to the console
console.warn("This is a warning message"); // Outputs a warning message to the console
console.error("This is an error message"); // Outputs an error message to the console
console.info("This is an informational message"); // Outputs an informational message to the console
console.debug("This is a debug message"); // Outputs a debug message to the console

// Logging variables and objects
const name = "John";
const age = 30;
console.log("Name:", name, "Age:", age); // Outputs variables to the console

const person = { name: "John", age: 30 };
console.log("Person:", person); // Outputs an object to the console
console.dir(person); // Outputs an object to the console

// Formatting console output
console.log("My name is %s and I am %d years old", name, age); // Outputs formatted message using placeholders

// Timing
console.time("timer"); // Starts a timer

for (let i = 0; i < 1000000; i++) {
    // Some code
}
// Code to measure execution time
console.timeEnd("timer"); // Stops the timer and outputs the elapsed time

// Assertions
console.assert(age > 18, "Age must be greater than 18"); // Checks if a condition is true, otherwise outputs an error message

// Clearing the console
console.clear(); // Clears the console

// Other console methods
console.info("This is an informational message"); // Outputs an informational message to the console
console.table([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
]); // Outputs a table of objects to the console

console.group("Group 1"); // Creates a new inline group in the console
console.log("Group 1 message 1"); // Outputs a message to the console
console.log("Group 1 message 2"); // Outputs a message to the console
console.groupEnd(); // Exits the current inline group in the console

console.groupCollapsed("Group 2"); // Creates a new inline group in the console
console.log("Group 2 message 1"); // Outputs a message to the console
console.log("Group 2 message 2"); // Outputs a message to the console
console.groupEnd(); // Exits the current inline group in the console

console.count("Counter"); // Outputs the number of times that count() has been invoked with the given label
console.count("Counter"); // Outputs the number of times that count() has been invoked with the given label
console.countReset("Counter"); // Resets the counter for the given label
