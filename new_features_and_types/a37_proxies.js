// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// https://javascript.info/proxy

// Create a target object
const target = {
    name: "John",
    age: 30,
};

// Create a handler object
const handler = {
    get: function (target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },
    set: function (target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
    },
    deleteProperty: function (target, property) {
        console.log(`Deleting ${property}`);
        delete target[property];
    },
};

// Create a proxy object
const proxy = new Proxy(target, handler);

// Access properties through the proxy
console.log(proxy.name); // Output: Getting name
proxy.age = 35; // Output: Setting age to 35
console.log(proxy.age); // Output: Getting age

// Delete a property through the proxy
delete proxy.name; // Output: Deleting name
console.log(proxy.name); // Output: undefined
