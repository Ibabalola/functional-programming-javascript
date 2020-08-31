/**
 * JavaScript: sort function
 *
 * .sort() is a mutating function, therefore mutates!
 * modifies the original array it called on
 *
 * For functional programming is this is recommended:
 * myArray.slice().sort();
 *
 * - Takes a function as an argument, called a comparator function
 */

//  const sortedNumbers = numbers.slice().sort((a, b) => {
//      // ...
//      return -1; // a should come before b

//      // ...
//      return 1; // b should come before a

//      // ...
//      return 0; // leave the elements in order as they are
//  });

const mixedUpNumbers = [10, 2, 4, 3, 7, 5, 8, 9, 1, 6];

const sortFunctionAscending = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

// const sortedNumbers = mixedUpNumbers.slice().sort(sortFunctionAscending);
const sortedNumbers = [...mixedUpNumbers].sort(sortFunctionAscending);

console.log(mixedUpNumbers);
console.log(sortedNumbers);
