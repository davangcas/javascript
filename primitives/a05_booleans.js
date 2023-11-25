// booleans documentation - https://developer.mozilla.org/en-US/docs/Glossary/Boolean

let true_value = true;
let false_value = false;

console.log(true_value);
console.log(false_value);
console.log(typeof true_value);
console.log(typeof false_value);

// falsy values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));

// truthy values
console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function () {}));
console.log(Boolean(true));
