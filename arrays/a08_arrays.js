// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/**
 * An empty array.
 * @type {Array}
 */
const empty_array = [];

/**
 * An array with numbers.
 * @type {Array<number>}
 */
const array = [1, 2, 3, 4, 5];

/**
 * An array with different types of values.
 * @type {Array<number|string|boolean|null|undefined|NaN|Object|Array>}
 */
const array_with_different_types = [1, "2", true, null, undefined, NaN, {}, []];

/**
 * An array of arrays.
 * @type {Array<Array<number>>}
 */
const array_with_arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

/**
 * An array of objects.
 * @type {Array<Object>}
 */
const array_with_objects = [{}, {}, {}];

/**
 * An array of functions.
 * @type {Array<Function>}
 */
const array_with_functions = [() => {}, () => {}, () => {}];

/**
 * An array with undefined values.
 * @type {Array<undefined>}
 */
const array_with_undefined = [undefined, undefined, undefined];

/**
 * An array with null values.
 * @type {Array<null>}
 */
const array_with_null = [null, null, null];

/**
 * An array with NaN values.
 * @type {Array<NaN>}
 */
const array_with_nan = [NaN, NaN, NaN];

console.log(empty_array);
console.log(array);
console.log(array_with_different_types);
console.log(array_with_arrays);
console.log(array_with_objects);
console.log(array_with_functions);
console.log(array_with_undefined);
console.log(array_with_null);
console.log(array_with_nan);

/**
 * Fills all elements of the array with a static value.
 * @param {*} value - The value to fill the array with.
 * @returns {Array} - The modified array.
 */
array.fill(false);
console.log(array);

/**
 * Fills a range of elements in the array with a static value.
 * @param {*} value - The value to fill the array with.
 * @param {number} start - The index at which to start filling (inclusive).
 * @param {number} end - The index at which to stop filling (exclusive).
 * @returns {Array} - The modified array.
 */
array.fill(true, 1, 3);
console.log(array);

/**
 * Fills all elements from a start index to the end of the array with a static value.
 * @param {*} value - The value to fill the array with.
 * @param {number} start - The index at which to start filling (inclusive).
 * @returns {Array} - The modified array.
 */
array.fill(true, 1);
console.log(array);

/**
 * Adds one or more elements to the end of the array.
 * @param {...*} elements - The elements to add to the array.
 * @returns {number} - The new length of the array.
 */
array.push(6);
console.log(array);

/**
 * Removes the last element from the array.
 * @returns {*} - The removed element.
 */
array.pop();
console.log(array);

/**
 * Adds one or more elements to the beginning of the array.
 * @param {...*} elements - The elements to add to the array.
 * @returns {number} - The new length of the array.
 */
array.unshift(0);
console.log(array);

/**
 * Removes the first element from the array.
 * @returns {*} - The removed element.
 */
array.shift();
console.log(array);

/**
 * Removes elements from the array and optionally replaces them with new elements.
 * @param {number} start - The index at which to start removing elements.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} elements - The elements to add in place of the removed elements.
 * @returns {Array} - The modified array.
 */
array.splice(1, 2);
console.log(array);

/**
 * Removes elements from the array and inserts new elements at the specified index.
 * @param {number} start - The index at which to start removing elements.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} elements - The elements to insert at the specified index.
 * @returns {Array} - The modified array.
 */
array.splice(1, 0, 2, 3);
console.log(array);

/**
 * Removes elements from the array and inserts new elements at the specified index.
 * @param {number} start - The index at which to start removing elements.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} elements - The elements to insert at the specified index.
 * @returns {Array} - The modified array.
 */
array.splice(1, 2, 2, 3);
console.log(array);

/**
 * Removes elements from the array and inserts new elements at the specified index.
 * @param {number} start - The index at which to start removing elements.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {...*} elements - The elements to insert at the specified index.
 * @returns {Array} - The modified array.
 */
array.splice(1, 2, 2, 3, 4, 5);
console.log(array);
