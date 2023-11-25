// short circuit operator documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation

// OR operator

let x = 5;
let y = 10;

let result = x || y;

console.log(result);

let name = "";
let defaultName = "John Doe";

result = name || defaultName;

console.log(result);

// AND operator

let a = 5;
let b = 10;

result = a && b;

console.log(result);

let name2 = "";
let defaultName2 = "John Doe";

result = name2 && defaultName2;

console.log(result);
