class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Static method to calculate the area of a circle
    static calculateArea(radius) {
        return Math.PI * radius * radius;
    }

    // Getter for the diameter of the circle
    get diameter() {
        return this.radius * 2;
    }

    // Setter for the diameter of the circle
    set diameter(diameter) {
        this.radius = diameter / 2;
    }
}

// Calling the static method directly on the class
const area = Circle.calculateArea(5);
console.log(area); // Output: 78.53981633974483

// Creating an instance of the Circle class
const circle = new Circle(3);

// Accessing the getter
console.log(circle.diameter); // Output: 6

// Setting the diameter using the setter
circle.diameter = 10;
console.log(circle.radius); // Output: 5
