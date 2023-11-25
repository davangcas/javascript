// generators documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

// Generator function
function* myGenerator() {
    yield "Hello";
    yield "World";
    yield "!";
}

// Creating an instance of the generator
const generator = myGenerator();

// Using the generator methods and attributes
console.log(generator.next()); // { value: 'Hello', done: false }
console.log(generator.next()); // { value: 'World', done: false }
console.log(generator.next()); // { value: '!', done: false }
console.log(generator.next()); // { value: undefined, done: true }

// Resetting the generator
generator.return(); // { value: undefined, done: true }

// Checking if the generator is done
console.log(generator.next()); // { value: undefined, done: true }
