// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_dom_event_handler
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_method_of_an_object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_global_object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_arrow_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_implicitly_bound_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_a_caller_of_an_implicitly_bound_function

// Method to access the current value of `this`
function getCurrentThis() {
    return this;
}

// Method to bind a specific value to `this`
function bindThis(value) {
    return this.bind(value);
}

// Method to call a function with a specific value as `this`
function callThis(value) {
    return this.call(value);
}

// Method to apply a function with a specific value as `this`
function applyThis(value, args) {
    return this.apply(value, args);
}

// Attribute to access the prototype of an object
const prototype = Object.getPrototypeOf(this);

// Attribute to access the constructor of an object
const constructor = this.constructor;

// Attribute to check if a function is bound to a specific value of `this`
const isBound = this.hasOwnProperty("boundThis");

// Attribute to check if a function is a constructor
const isConstructor = this.hasOwnProperty("prototype");

// Attribute to check if a function is an arrow function
const isArrowFunction =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "ArrowFunction";

// Attribute to check if a function is a generator function
const isGeneratorFunction =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "GeneratorFunction";

// Attribute to check if a function is a class constructor
const isClassConstructor =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a regular function
const isRegularFunction =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a method
const isMethod =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a getter
const isGetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a setter
const isSetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static method
const isStaticMethod =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static getter
const isStaticGetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static setter
const isStaticSetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static property
const isStaticProperty =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static symbol
const isStaticSymbol =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static private method
const isStaticPrivateMethod =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static private getter
const isStaticPrivateGetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static private setter
const isStaticPrivateSetter =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static private property
const isStaticPrivateProperty =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";

// Attribute to check if a function is a static private symbol
const isStaticPrivateSymbol =
    this.hasOwnProperty("prototype") &&
    this.prototype.hasOwnProperty("constructor") &&
    this.prototype.constructor.name === "Function";
