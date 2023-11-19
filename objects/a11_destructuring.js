// Run: node a11_destructuring.js
// Destructuring

// Array
const first_array = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = first_array;
console.log(first, second, third, fourth, fifth); // 1 2 3 4 5

// Object
const person = {
    name: "John",
    age: 30,
    location: "New York",
};
const { name, age, location } = person;
console.log(name, age, location); // John 30 New York

// Nested Object
const person2 = {
    name: "John",
    age: 30,
    location: "New York",
    job: {
        title: "Software Engineer",
        company: "Google",
    },
};
const {
    name: name2,
    age: age2,
    location: location2,
    job: { title, company },
} = person2;
console.log(name2, age2, location2, title, company); // John 30 New York Software Engineer Google
