// iife doc: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
    // Code inside the IIFE
    console.log("This is an IIFE");
})();

// with parameters
(function (a, b) {
    console.log(a + b);
})(1, 2);

// crockford's way
(function (global) {
    // Code inside the IIFE
    console.log("This is an IIFE");
})(this);

// Unaria way
+(function () {
    // Code inside the IIFE
    console.log("This is an IIFE");
})();

// Facebook way
!(function () {
    // Code inside the IIFE
    console.log("This is an IIFE");
})();
