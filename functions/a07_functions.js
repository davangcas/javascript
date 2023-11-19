// declarated function
function sayHello() {
    console.log("Hello");
}
// function expression
let sayHi = function () {
    console.log("Hi");
};
// arrow function
let sayHey = () => {
    console.log("Hey");
};
// function with parameters
function saySomething(something) {
    console.log(something);
}
// function with return
function sum(a, b) {
    return a + b;
}
// function with default parameters
function saySomethingElse(something = "nothing") {
    console.log(something);
}
// function with rest parameters
function sayAll(...somethings) {
    console.log(somethings);
}
// function with spread operator
function sayAllAgain(something1, something2, something3) {
    console.log(something1, something2, something3);
}
// function with callback
function sayBye(callback) {
    callback();
}
// function with callback and parameters
function sayByeBye(callback, name) {
    callback(name);
}

// call functions
sayHello();
sayHi();
sayHey();
saySomething("Something");
console.log(sum(1, 2));
saySomethingElse();
saySomethingElse("Something else");
sayAll("Something", "Something else", "Something else again");
sayAllAgain(...["Something", "Something else", "Something else again"]);
sayBye(() => console.log("Bye"));
sayByeBye((name) => console.log("Bye " + name), "John");
