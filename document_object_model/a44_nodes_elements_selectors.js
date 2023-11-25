// node documentaion: https://developer.mozilla.org/en-US/docs/Web/API/Node
// selector documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
// element documentation: https://developer.mozilla.org/en-US/docs/Web/API/Element

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
console.log(existingElement.textContent);

// Add an event listener to an element
existingElement.addEventListener("click", () => {
    console.log("Element clicked!");
});

// Access an existing element by its class
const existingElements = document.getElementsByClassName("myClass");

console.log(document.querySelectorAll(".myClass"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.myClass"));
console.log(document.querySelectorAll("div#myElement"));

console.log(document.querySelector(".myClass"));
console.log(document.querySelector("div"));
console.log(document.querySelector("div.myClass"));
console.log(document.querySelector("div#myElement"));
