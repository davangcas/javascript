// literal objects

let name = "John";
let age = 30;
let location = "New York";
let title = "Software Engineer";

// Object
const person = {
    name,
    age,
    location,
};
console.log(person); // { name: 'John', age: 30, location: 'New York' }

// Nested Object
const person2 = {
    name,
    age,
    location,
    job: {
        title,
    },
};
console.log(person2); // { name: 'John', age: 30, location: 'New York', job: { title: 'Software Engineer' } }
