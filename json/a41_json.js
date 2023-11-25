// json doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// Create a JSON object
const person = {
    name: "John",
    age: 30,
    city: "New York",
};

// Convert JSON object to a string
const jsonString = JSON.stringify(person);
console.log(jsonString);

// Parse a JSON string to an object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// Accessing JSON properties
console.log(jsonObject.name);
console.log(jsonObject["age"]);

// Modifying JSON properties
jsonObject.age = 35;
console.log(jsonObject);

// Adding new properties to JSON
jsonObject.country = "USA";
console.log(jsonObject);

// Deleting a property from JSON
delete jsonObject.city;
console.log(jsonObject);

// Checking if a property exists in JSON
console.log("name" in jsonObject);
console.log("city" in jsonObject);

// Getting all keys of a JSON object
const keys = Object.keys(jsonObject);
console.log(keys);

// Getting all values of a JSON object
const values = Object.values(jsonObject);
console.log(values);
