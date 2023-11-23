console.log("--------------------");
console.log("Exercise 02");
console.log("--------------------");

// reverse string
const stringReverter = (string) => {
    console.log("Executing stringReverter function :");
    if (typeof string !== "string") {
        return "";
    }

    return string.split("").reverse().join("");
};
console.log(stringReverter("Hello World!"));
console.log(stringReverter("My name is John"));
console.log(stringReverter("12345"));

// word counting
const wordCounter = (string, word) => {
    console.log("Executing wordCounter function :");
    if (typeof string !== "string") {
        return 0;
    }

    return string.split(word).length - 1;
};
console.log(wordCounter("Hello World!", "Hello"));
console.log(wordCounter("Hello World!", "World"));
console.log(wordCounter("Hello World!", "o"));

// palindrome checker
const checkPalindromeString = (string) => {
    console.log("Executing checkPalindromeString function :");
    if (typeof string !== "string") {
        return false;
    }

    const reversed_string = string.split("").reverse().join("");
    return string === reversed_string;
};
console.log(checkPalindromeString("Hello World!"));
console.log(checkPalindromeString("12321"));
console.log(checkPalindromeString("12345"));

// remove pattern from string
const patternRemover = (string, pattern) => {
    if (typeof string !== "string" || typeof pattern !== "string") {
        return "";
    }

    return string.split(pattern).join("");
};
console.log(patternRemover("Hello World!", "Hello"));
console.log(patternRemover("Hello World!", "World"));
console.log(patternRemover("Hello World!", "o"));
console.log(patternRemover("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
