// web apis documentation: https://developer.mozilla.org/en-US/docs/Web/API
// dom documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// Example code to understand Web APIs in JavaScript

// DOM API
const element = document.getElementById("myElement");
element.textContent = "Hello, World!";

// Fetch API
// fetch("https://www.google.com/?hl=es")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));

// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});

// Local Storage API
localStorage.setItem("username", "JohnDoe");
const username = localStorage.getItem("username");
console.log(username);

// Web Storage API
sessionStorage.setItem("theme", "dark");
const theme = sessionStorage.getItem("theme");
console.log(theme);

// Web Workers API
// const worker = new Worker("worker.js");
// worker.postMessage("Hello from main script!");
// worker.onmessage = (event) => {
//     console.log(`Message from worker: ${event.data}`);
// };

// WebSockets API
// const socket = new WebSocket("wss://example.com/socket");
// socket.onopen = () => {
//     socket.send("Hello from client!");
// };
// socket.onmessage = (event) => {
//     console.log(`Message from server: ${event.data}`);
// };
// socket.onclose = (event) => {
//     console.log("Connection closed");
// };

// Speach Synthesis API
const text = "Hola Josema";
const speaker_function = (text) => speechSynthesis.speak(new SpeechSynthesisUtterance(text));
speaker_function(text);