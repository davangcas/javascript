const empty_array = [];
const array = [1, 2, 3, 4, 5];
const array_with_different_types = [1, "2", true, null, undefined, NaN, {}, []];
const array_with_arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const array_with_objects = [{}, {}, {}];
const array_with_functions = [() => {}, () => {}, () => {}];
const array_with_undefined = [undefined, undefined, undefined];
const array_with_null = [null, null, null];
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

array.fill(false);
console.log(array);

array.fill(true, 1, 3);
console.log(array);

array.fill(true, 1);
console.log(array);

array.push(6);
console.log(array);

array.pop();
console.log(array);

array.unshift(0);
console.log(array);

array.shift();
console.log(array);

array.splice(1, 2);
console.log(array);

array.splice(1, 0, 2, 3);
console.log(array);

array.splice(1, 2, 2, 3);
console.log(array);

array.splice(1, 2, 2, 3, 4, 5);
console.log(array);
