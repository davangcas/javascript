// alert object documentation - https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
// confirm object documentation - https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
// prompt object documentation - https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

// Display an alert dialog box
alert("This is an alert!");

// Display a confirmation dialog box
var result = confirm("Are you sure?");
if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Display a prompt dialog box
var name = prompt("Please enter your name:");
if (name) {
    console.log("Hello, " + name + "!");
} else {
    console.log("No name entered");
}
