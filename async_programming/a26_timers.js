// Using setTimeout
console.log("Before setTimeout");
setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000);
console.log("After setTimeout");

// Using setInterval
let counter = 0;
console.log("Before setInterval");
const intervalId = setInterval(() => {
    console.log("Inside setInterval");
    counter++;
    if (counter === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);
console.log("After setInterval");
