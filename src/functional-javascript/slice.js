/**
 * JavaScript: slice function
 *
 * - Is not an High Order function, it does take a function as an argument
 * - Important for working with arrays in JavaScript
 * - Functional Programing prohibits the mutation of arrays
 *
 * Used to obtain a subsection of an array.
 * Does not mutate the array it is called on, it returns a copy
 *
 * args:
 *  - where to start from
 *  - where to end (non-inclusive)
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.slice(3, 8));

// slice can be used to obtain a shallow copy of an array
console.log(numbers.slice().reverse());
console.log(numbers);
