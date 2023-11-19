const say_hello = (name) => console.log(`Hello ${name}!`);
say_hello("John"); // Hello John!

const expressed_sum = function (a, b) {
    return a + b;
};

const arrow_sum = (a, b) => a + b;

console.log(expressed_sum(1, 2)); // 3
console.log(arrow_sum(1, 2)); // 3

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(number)); // 1 2 3 4 5
