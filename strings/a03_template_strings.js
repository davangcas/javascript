// template strings documentation - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let first_name = "John";
let last_name = "Doe";

console.log(first_name + " " + last_name);
console.log(`${first_name} ${last_name}`);

let unordenated_list = `
    <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
    </ul>
`;
console.log(unordenated_list);

let initial_string = "Hello World";
console.log(initial_string);
initial_string += "!";
console.log(initial_string);
