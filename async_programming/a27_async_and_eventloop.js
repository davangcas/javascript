console.log("Start");

setTimeout(() => {
    console.log("Async Task 1");
}, 2000);

setTimeout(() => {
    console.log("Async Task 2");
}, 1000);

console.log("End");
