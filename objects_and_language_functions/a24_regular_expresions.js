// Create a regular expression pattern to match email addresses
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test if a string matches the email pattern
const email = "example@email.com";
if (emailPattern.test(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

// Extract matches from a string using regular expressions
const text = "Hello, my name is John. You can reach me at john@example.com.";
const matches = text.match(emailPattern);
console.log(matches);

// Replace matches in a string using regular expressions
const newText = text.replace(emailPattern, "REDACTED");
console.log(newText);

// Split a string into an array using regular expressions
const text2 = "Hello, my name is John. You can reach me at";
const words = text2.split(/\s+/);
console.log(words);

// Join an array into a string using regular expressions
const text3 = words.join(" ");
console.log(text3);

// Create a regular expression pattern to match email addresses
const emailPattern2 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test if a string matches the email pattern
const email2 = "exampleemail.com";
if (emailPattern2.test(email2)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}

let lorem_text =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed non risus";
let regular_expression = new RegExp("lorem", "gi");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

regular_expression = new RegExp("lorem", "g");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

regular_expression = new RegExp("lorem", "i");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

regular_expression = new RegExp("lorem", "m");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

regular_expression = new RegExp("lorem", "u");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

regular_expression = new RegExp("lorem", "y");
console.log(regular_expression.test(lorem_text));
console.log(regular_expression.exec(lorem_text));

console.log(lorem_text.match(regular_expression));
console.log(lorem_text.replace(regular_expression, "REDACTED"));
console.log(lorem_text.split(regular_expression));
console.log(lorem_text.split(/\s+/));
console.log(lorem_text.split(/,/));
console.log(lorem_text.split(/,/).join(" "));
console.log(lorem_text.split(/,/).join(", "));
console.log(lorem_text.split(/,/).join(" - "));
console.log(lorem_text.split(/,/).join(" - ").split(" "));
console.log(lorem_text.split(/,/).join(" - ").split(" - "));
console.log(lorem_text.split(/,/).join(" - ").split(" - ").join(" "));
console.log(
    lorem_text.split(/,/).join(" - ").split(" - ").join(" ").split(" ")
);
