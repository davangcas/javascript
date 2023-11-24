// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve the promise with a value
        } else {
            reject(new Error("Random number is less than 0.5")); // Reject the promise with an error
        }
    }, 1000);
});

// Consume the promise
myPromise
    .then((result) => {
        console.log("Promise resolved with value:", result);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });

// promise with more than one then
const myPromise2 = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber); // Resolve the promise with a value
        } else {
            reject(new Error("Random number is less than 0.5")); // Reject the promise with an error
        }
    }, 1000);
});

myPromise2
    .then((result) => {
        console.log("Promise resolved with value:", result);
        return result * 2;
    })
    .then((result) => {
        console.log("Promise resolved with value:", result);
        return result * 3;
    })
    .then((result) => {
        console.log("Promise resolved with value:", result);
    })
    .catch((error) => {
        console.error("Promise rejected with error:", error);
    });
