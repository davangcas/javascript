// dom traversing documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

// Selecting the parent element
const parentElement = document.querySelector(".parent");

// Accessing child elements
const firstChild = parentElement.firstChild;
const lastChild = parentElement.lastChild;
const children = parentElement.children;

// Accessing sibling elements
const previousSibling = firstChild.previousSibling;
const nextSibling = lastChild.nextSibling;

// Accessing the parent node
const parentNode = firstChild.parentNode;

// Accessing the element's attributes
const elementId = parentElement.id;
const elementClass = parentElement.className;
const elementAttributes = parentElement.attributes;

// Traversing the DOM tree
const ancestorElement = parentElement.closest(".ancestor");
const descendantElements = parentElement.querySelectorAll(".descendant");

// Modifying element properties
parentElement.style.backgroundColor = "red";
firstChild.textContent = "Hello, world!";
