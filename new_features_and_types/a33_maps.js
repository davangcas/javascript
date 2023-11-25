// Create a new map
const myMap = new Map();

// Add key-value pairs to the map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

// Get the value for a specific key
const name = myMap.get("name");
console.log(name); // Output: John

// Check if a key exists in the map
const hasAge = myMap.has("age");
console.log(hasAge); // Output: true

// Get the number of key-value pairs in the map
const size = myMap.size;
console.log(size); // Output: 3

// Iterate over the map using a for...of loop
for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

const myMapKeys = [...myMap.keys()];
console.log(myMapKeys); // Output: ["name", "age", "city"]
const myMapValues = [...myMap.values()];
console.log(myMapValues); // Output: ["John", 30, "New York"]

// Remove a key-value pair from the map
myMap.delete("city");

// Clear all key-value pairs from the map
myMap.clear();
