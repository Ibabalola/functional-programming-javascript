/**
 * JavaScript: reduce function
 *
 * - allows us to take a array of data and reduce it down to a
 * single value
 *
 * myArray.reduce((acc, element) => {
 * ...
 * return ...
 * }, initialValue);
 *
 * args
 * - acc, represents the current value we have built up upon
 * - element, represents the current element of the array we're looking at
 *
 * const sum = myArray.reduce((acc, element) => acc + element, 0);
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * .reduceRight()
 *
 * The reduceRight() method applies a function against an accumulator and each
 * value of the array (from right-to-left) to reduce it to a single value.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
 */

const numbers = [5, 7, 2, 40, 23, 14, 8, 4, 11];
const findSum = (acc, number) => {
  console.log('Number', number);

  return acc + number;
};

const sum = numbers.reduce(findSum, 0);
const sumRight = numbers.reduceRight(findSum, 0);

console.log('Sum:', sum);
console.log('Sum Right:', sumRight);
