// objects doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

const new_object = {
    name: "John",
    age: 30,
    hobbies: ["reading", "cooking", "coding"],
    greet: function () {
        console.log("Hi there!");
    },
};

console.log(new_object);
console.log(new_object.name);
console.log(new_object.age);
console.log(new_object.hobbies);
console.log(new_object.greet());

console.log("------------------");
console.log(Object.keys(new_object));
console.log(Object.values(new_object));
