// classes doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Usage
const animal = new Animal("Animal");
animal.eat(); // Output: Animal is eating.
animal.sleep(); // Output: Animal is sleeping.

const dog = new Dog("Buddy", "Labrador");
dog.eat(); // Output: Buddy is eating.
dog.sleep(); // Output: Buddy is sleeping.
dog.bark(); // Output: Buddy is barking.
