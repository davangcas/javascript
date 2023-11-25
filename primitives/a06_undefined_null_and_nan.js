// undefined, null and NaN documentation - https://developer.mozilla.org/en-US/docs/Glossary/Primitive

let undefinded_value;
let null_value = null;
let nan_value = NaN;

console.log(undefinded_value);
console.log(null_value);
console.log(nan_value);
console.log(typeof undefinded_value);
console.log(typeof null_value);
console.log(typeof nan_value);

// falsy values
console.log(Boolean(undefinded_value));
console.log(Boolean(null_value));
console.log(Boolean(nan_value));
