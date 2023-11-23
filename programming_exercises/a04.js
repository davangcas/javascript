console.log("--------------------");
console.log("Exercise 04");
console.log("--------------------");

// check if number is prime
const primeNumber = (number) => {
    if (typeof number !== "number") {
        return false;
    }

    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};
console.log(primeNumber(2));
console.log(primeNumber(3));
console.log(primeNumber(4));

// check if number is even
const checkEvenNumber = (number) => {
    if (typeof number !== "number") {
        return false;
    }

    if (number % 2 === 0) {
        return true;
    }

    return false;
};
console.log(checkEvenNumber(2));
console.log(checkEvenNumber(3));
console.log(checkEvenNumber(4));

// celcius to fahrenheit converter (and vice versa)
const celciusToFahrenheit = (celcius) => {
    if (typeof celcius !== "number") {
        return 0;
    }

    return celcius * 1.8 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
    if (typeof fahrenheit !== "number") {
        return 0;
    }

    return (fahrenheit - 32) / 1.8;
};

const temperatureConverter = (temperature, unit) => {
    if (typeof temperature !== "number") {
        return 0;
    }

    if (unit === "celcius") {
        return celciusToFahrenheit(temperature);
    } else if (unit === "fahrenheit") {
        return fahrenheitToCelcius(temperature);
    }

    return 0;
};
console.log(temperatureConverter(32, "celcius"));
console.log(temperatureConverter(32, "fahrenheit"));
console.log(temperatureConverter(70, "celcius"));
console.log(temperatureConverter(70, "fahrenheit"));
