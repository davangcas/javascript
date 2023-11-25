// rest parameter documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// spread operator documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// rest parameter and spread operator

// rest parameter
// rest parameter is used to represent an indefinite number of arguments as an array
// rest parameter is prefixed with three dots (...)
// rest parameter must be the last parameter in the function parameter list
// rest parameter is similar to arguments object

// rest parameter
function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28

// spread operator
// spread operator is used to expand an array into individual elements
// spread operator is prefixed with three dots (...)
// spread operator is used in function call and array literal

// spread operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(...numbers); // 1 2 3 4 5
console.log(Math.max(...numbers)); // 5
console.log(Math.min(...numbers)); // 1
console.log(newNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
