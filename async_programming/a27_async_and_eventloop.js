// asynchronous programming document: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
// event loop document: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

console.log("Start");

setTimeout(() => {
    console.log("Async Task 1");
}, 2000);

setTimeout(() => {
    console.log("Async Task 2");
}, 1000);

console.log("End");
