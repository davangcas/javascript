// sets documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// Create a new set
const mySet = new Set();

// Add elements to the set
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");

// Check if an element exists in the set
console.log(mySet.has("apple")); // Output: true
console.log(mySet.has("grape")); // Output: false

// Get the size of the set
console.log(mySet.size); // Output: 3

// Iterate over the set
mySet.forEach((value) => {
    console.log(value);
});

// Iterate over the set using for...of
for (const value of mySet) {
    console.log(value);
}

console.log(mySet.values()); // Output: SetIterator {"apple", "banana", "orange"}
console.log(mySet.keys()); // Output: SetIterator {"apple", "banana", "orange"}
console.log(mySet.entries()); // Output: SetIterator {"apple", "banana", "orange"}
console.log(Array.from(mySet)); // Output: ["apple", "banana", "orange"]

let array_from_set = Array.from(mySet);
console.log(array_from_set); // Output: ["apple", "banana", "orange"]
console.log(array_from_set[0]); // Output: apple

// Remove an element from the set
mySet.delete("banana");

// Clear all elements from the set
mySet.clear();
