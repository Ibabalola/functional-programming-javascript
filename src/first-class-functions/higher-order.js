/**
 * Higher-Order Functions: "Functions that take other function as arguments
 * or return functions"
 * Provides flexibility
 * Principle of clean code: Each piece of code should have only one responsibility
 */

const divide = (x, y) => x / y;

const secondArgumentZero = func => (...args) => {
  if (args[1] === 0) {
    console.log('Error: dividing by zero');
    return null;
  }

  return func(...args);
};

console.log(secondArgumentZero(divide)(5, 0));
