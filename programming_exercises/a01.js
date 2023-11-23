console.log("--------------------");
console.log("Exercise 01");
console.log("--------------------");

// Number counting from string
const characterCounter = (string) => {
    console.log("Executing characterCounter function :");
    if (typeof string !== "string") {
        return 0;
    }
    return string.length;
};
console.log(characterCounter("Hello World!"));
console.log(characterCounter(""));
console.log(characterCounter(123));
console.log(characterCounter(true));

// Get cutted string
const stringCutter = (string, number) => {
    console.log("Executing stringCutter function :");
    if (typeof string !== "string" || typeof number !== "number") {
        return "";
    }

    return string.slice(0, number);
};
console.log(stringCutter("Hello World!", 5));
console.log(stringCutter("Hello World!", 0));
console.log(stringCutter("Hello World!", 10));
console.log(stringCutter("Hello World!", 11));

// Get string splitted by separator
const customStringSplitter = (string, separator) => {
    if (typeof string !== "string" || typeof separator !== "string") {
        return [];
    }

    return string.split(separator);
};
console.log(customStringSplitter("Hello World!", " "));
console.log(customStringSplitter("Hello World!", "o"));
console.log(customStringSplitter("Hello World!", "l"));
console.log(customStringSplitter("Hello World!", "H"));

// Get string repeated
const stringRepeater = (string, number) => {
    if (typeof string !== "string" || typeof number !== "number") {
        return "";
    }

    return string.repeat(number);
};
console.log(stringRepeater("Hello World!", 5));
console.log(stringRepeater("Hello World!", 0));
console.log(stringRepeater("Hello World!", 10));
console.log(stringRepeater("Hello World!", 11));
