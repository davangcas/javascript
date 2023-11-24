// Create a symbol
const mySymbol = Symbol();

// Use the symbol as a property key
const obj = {
    [mySymbol]: "Hello, symbol!",
};

// Access the symbol property
console.log(obj[mySymbol]); // Output: Hello, symbol!
