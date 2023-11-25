// symbols documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// Create a symbol
const mySymbol = Symbol();

// Use the symbol as a property key
const obj = {
    [mySymbol]: "Hello, symbol!",
};

// Access the symbol property
console.log(obj[mySymbol]); // Output: Hello, symbol!
