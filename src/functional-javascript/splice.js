/**
 * JavaScript: splice function
 *
 * The splice() method changes the contents of an array by
 * removing or replacing existing elements and/or adding new elements in place.
 *
 * Used to cut a subsection of an array and insert new elements.
 * Mutates the array it is called on, it returns the result of the cut
 *
 * args:
 *  - where to start from
 *  - delete count indicating the number of elements to be remove from start
 *  - elements to add to the array
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers.splice(3, 8));

// slice can be used to obtain a shallow copy of an array
console.log(numbers.splice(2, 3, 'C', 'D', 'E').reverse());
console.log(numbers);
