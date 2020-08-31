/**
 * Advance Functional Concepts
 *
 * 1. Immutability
 * const shallow = [...myArray];
 *
 * 2. Separating functions and data
 * const giveMeAFunction = () =>
 *    () => console.log('I am a function');
 *
 * 3. First-class functions
 * const result = myArray.map(x => x * 2)
 *      .sort((a, b) => a - b)
 *      .some(x => x > 10);
 *
 * 4. Recursion
 * - When a function calls itself
 * - const recursiveFunction = () => {
 *  // ... do some stuff
 *  recursiveFunction();
 * }
 *
 * 5. Partial Application
 * - Take a function that has some number of arguments
 * and we fix some of these arguments to a set value.
 *
 * - Currying, passing in function arguments in one at a time
 * - const addPartial = x =>
 *       y =>
 *            z => add(x, y, z);
 * - const sum = addPartial(5)(6)(7);
 */

// Partial application
const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const add5 = addPartial(5); // returns a function
const sum = add5(6, 7); // 18

console.log(sum);
console.log('\n');

// recurision
const countDown = (x) => {
  console.log(x);

  if (x > 0) {
    setTimeout(() => countDown(x - 1), 1000);
  }
};

countDown(10);

// function as objects
const sayHello = () => console.log('Hello');
console.log(sayHello.name);

const addValues = (x, y, z) => x + y + z;
console.log(addValues.length); // number of arg passed

// toString property which returns the string property
// of the functions code
console.log(sayHello.toString());
console.log(addValues.toString());

// Function properties
// used in OOP to control internal state

// .call() - calls our function
// allows us to pass the this keyword,
// which in functional programming will
// not be used often so null is passed
console.log(add.call(null, 1, 2, 3));

// .apply()
// same as call however parameters are
// sent in an array with the arguments
console.log(add.apply(null, [1, 2, 3]));

// .bind()
// Useful in Functional programming
// let us change the this context
// allows us to fix args, which
// is a technique for partial
// application

const addOne = add.bind(null, 1);
console.log(addOne(2, 3));
