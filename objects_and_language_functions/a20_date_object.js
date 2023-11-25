// date object documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Create a new instance of the Date object
const currentDate = new Date();

// Get the current date and time
const currentDateTime = currentDate.toString();

// Get the current date
const currentDateString = currentDate.getDateString();

// Get the current full year (4 digits)
const currentFullYear = currentDate.getFullYear();

// Get the current year (2 digits)
const currentYear = currentDate.getYear();

// Get the current month (0-11)
const currentMonth = currentDate.getMonth();

// Get the current day of the month (1-31)
const currentDay = currentDate.getDate();

// Get the current day of the week (0-6)
const currentDayOfWeek = currentDate.getDay();

// Get the current hour (0-23)
const currentHour = currentDate.getHours();

// Get the current minute (0-59)
const currentMinute = currentDate.getMinutes();

// Get the current second (0-59)
const currentSecond = currentDate.getSeconds();

// Get the current millisecond (0-999)
const currentMillisecond = currentDate.getMilliseconds();

// Output the results
console.log("Current Date and Time:", currentDateTime);
console.log("Current Date:", currentDateString);
console.log("Current Full Year:", currentFullYear);
console.log("Current Year:", currentYear);
console.log("Current Month:", currentMonth);
console.log("Current Day:", currentDay);
console.log("Current Day of Week:", currentDayOfWeek);
console.log("Current Hour:", currentHour);
console.log("Current Minute:", currentMinute);
console.log("Current Second:", currentSecond);
console.log("Current Millisecond:", currentMillisecond);

// Create a new instance of the Date object
let date = new Date();

// Set the date to 1st January 2021
date.setFullYear(2021, 0, 1);

// Set the time to 12:00:00
date.setHours(12, 0, 0);

// Output the results
console.log(date.toString());
