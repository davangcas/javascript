console.log("--------------------");
console.log("Exercise 03");
console.log("--------------------");

// get random number between 501 and 600
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 500;
};
console.log(getRandomNumber());
console.log(getRandomNumber());
console.log(getRandomNumber());

// check capicua number
const isCapicua = (number) => {
    let numStr = number.toString();
    let numStrReverse = numStr.split("").reverse().join("");
    return numStr === numStrReverse;
};
console.log(isCapicua(123));
console.log(isCapicua(12321));
console.log(isCapicua(123321));

// get factorial from number
const getFactorial = (number) => {
    if (typeof number !== "number") {
        return 0;
    }

    if (number < 0) {
        return 0;
    }

    if (number === 0) {
        return 1;
    }

    return number * getFactorial(number - 1);
};
console.log(getFactorial(5));
console.log(getFactorial(10));
console.log(getFactorial(15));
