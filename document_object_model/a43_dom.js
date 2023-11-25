// dom documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// Create a new element
const newElement = document.createElement("div");

// Set attributes for the new element
newElement.setAttribute("id", "myElement");
newElement.setAttribute("class", "myClass");

// Append the new element to the document body
document.body.appendChild(newElement);

// Access an existing element by its ID
const existingElement = document.getElementById("myElement");

// Change the text content of an element
existingElement.textContent = "Hello, world!";

// Add an event listener to an element
existingElement.addEventListener("click", () => {
    console.log("Element clicked!");
});

// Remove an event listener from an element
existingElement.removeEventListener("click", () => {
    console.log("Element clicked!");
});

// Get the parent element of an element
const parentElement = existingElement.parentNode;

// Get the child elements of an element
const childElements = existingElement.childNodes;

// Get the value of an input element
const inputValue = document.getElementById("myInput").value;

// Change the style of an element
existingElement.style.backgroundColor = "red";
existingElement.style.color = "blue";

// Remove an element from the DOM
existingElement.remove();

console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.contentType);
console.log(document.scripts);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
setTimeout(() => {
    console.log(document.getSelection());
}, 3000);
document.title = "New Title";
document.write("Hello World");
