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
