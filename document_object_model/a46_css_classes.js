// css classes manipulation documentation - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// Create a new element
const element = document.createElement("div");

// Add a CSS class to the element
element.classList.add("my-class");

// Check if the element has a specific CSS class
const hasClass = element.classList.contains("my-class");
console.log(hasClass); // Output: true

// Remove a CSS class from the element
element.classList.remove("my-class");

// Toggle a CSS class on the element
element.classList.toggle("my-class");

// Get all CSS classes of the element
const classes = element.classList;
console.log(classes); // Output: DOMTokenList {  }

// Add multiple CSS classes to the element
element.classList.add("class1", "class2", "class3");

// Replace a CSS class on the element
element.classList.replace("class1", "new-class");

// Remove all CSS classes from the element
element.classList = "";

// Add CSS classes using the spread operator
const newClasses = ["class1", "class2", "class3"];
element.classList.add(...newClasses);
