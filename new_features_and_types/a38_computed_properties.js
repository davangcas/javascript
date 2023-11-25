// https://javascript.info/property-accessors
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

const propertyName = "color";
const propertyValue = "blue";

const obj = {
    [propertyName]: propertyValue,
    ["size"]: 10,
    ["isAvailable"]() {
        return true;
    },
};

console.log(obj.color); // Output: blue
console.log(obj.size); // Output: 10
console.log(obj.isAvailable()); // Output: true

const users_object = {};
const users_array = ["John", "Jane", "Jack"];
users_array.forEach((user, index) => {
    users_object[`id_${index}`] = user;
});
