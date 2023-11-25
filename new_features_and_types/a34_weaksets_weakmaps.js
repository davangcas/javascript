// weaksets documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
// weakmaps documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

/**
 * Represents a weak set in JavaScript.
 * @class
 */
const myWeakSet = new WeakSet();

/**
 * Adds an object to the weak set.
 * @param {Object} obj - The object to add.
 */
myWeakSet.add(obj);

/**
 * Checks if an object exists in the weak set.
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns true if the object exists in the weak set, otherwise false.
 */
myWeakSet.has(obj);

/**
 * Deletes an object from the weak set.
 * @param {Object} obj - The object to delete.
 * @returns {boolean} - Returns true if the object was successfully deleted, otherwise false.
 */
myWeakSet.delete(obj);

/**
 * Represents a weak map in JavaScript.
 * @class
 */
const myWeakMap = new WeakMap();

/**
 * Sets a key-value pair in the weak map.
 * @param {Object} key - The key to set.
 * @param {any} value - The value to set.
 */
myWeakMap.set(key, value);

/**
 * Gets the value associated with a key in the weak map.
 * @param {Object} key - The key to get the value for.
 * @returns {any} - Returns the value associated with the key, or undefined if the key doesn't exist.
 */
myWeakMap.get(key);

/**
 * Checks if a key exists in the weak map.
 * @param {Object} key - The key to check.
 * @returns {boolean} - Returns true if the key exists in the weak map, otherwise false.
 */
myWeakMap.has(key);

/**
 * Deletes a key-value pair from the weak map.
 * @param {Object} key - The key to delete.
 * @returns {boolean} - Returns true if the key-value pair was successfully deleted, otherwise false.
 */
myWeakMap.delete(key);
