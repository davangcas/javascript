// Example function that takes a callback
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = "Hello, world!";
        callback(data);
    }, 2000);
}

// Callback function to handle the fetched data
function handleData(data) {
    console.log("Received data:", data);
}

// Calling the fetchData function and passing the handleData callback
fetchData(handleData);

// square function that takes a callback
function square(number, callback) {
    setTimeout(() => {
        callback(number * number);
    }, 1000);
}

// Callback function to handle the squared number
function handleSquaredNumber(number) {
    console.log("Squared number:", number);

    // Nested callback
    square(number, (squaredNumber) => {
        console.log("Squared number of squared number:", squaredNumber);

        // Nested callback
        square(squaredNumber, (squaredSquaredNumber) => {
            console.log(
                "Squared number of squared number of squared number:",
                squaredSquaredNumber
            );
        });
    });
}

// Calling the square function and passing the handleSquaredNumber callback
square(5, handleSquaredNumber);
