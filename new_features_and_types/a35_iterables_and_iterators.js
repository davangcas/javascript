// Iterable object
const myIterable = {
    [Symbol.iterator]() {
        let count = 1;
        return {
            next() {
                if (count <= 5) {
                    return { value: count++, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

// Using the iterator
const iterator = myIterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { done: true }

const myIterable2 = {
    [Symbol.iterator]() {
        let count = 1;
        return {
            next() {
                if (count <= 5) {
                    return { value: count++, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    },
};

// Using the iterator
let next = myIterable2[Symbol.iterator]().next();
while (next.done !== true) {
    console.log(next.value);
    next = myIterable2[Symbol.iterator]().next();
}
