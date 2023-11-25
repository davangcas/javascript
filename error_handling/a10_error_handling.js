// error handling documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

let number = 10;

try {
    number = number + z;

    if (number == NaN) {
        throw "Not a number";
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("finally block");
}
