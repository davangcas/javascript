// async and await documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// Asynchronous function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

// Async function using the await keyword
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function
getData();

// async expressed as a function expression
const getData2 = async function () {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// Call the async function
getData2();
