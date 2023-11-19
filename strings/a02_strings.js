let string = "    Hello World    ";
console.log(string);
let object_string = new String("  Second String 2  ");
console.log(object_string);

console.log(string.length);
console.log(object_string.length);

console.log(string.toUpperCase());
console.log(object_string.toUpperCase());

console.log(string.toLowerCase());
console.log(object_string.toLowerCase());

console.log(string.includes("Hello"));
console.log(object_string.includes("Second"));
console.log(string.includes("Second"));
console.log(object_string.includes("Hello"));

console.log(string.trim());
console.log(object_string.trim());

console.log(string.split(" "));
console.log(object_string.split(" "));
