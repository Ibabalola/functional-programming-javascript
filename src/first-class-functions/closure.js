/**
 * Closure: "When we define a function that returns another function
 * the function that we return still access to the internal scope
 * of the function that returned it"
 */

const giveMeAFunction = () => {
  // when the function is return it'll
  // have access to this const
  const x = 5;

  return () => console.log(`x is ${x}`);
};

giveMeAFunction()();

// Implement private variable

const Person = ({ name, age, job }) => {
  let y = age;

  return {
    getName: () => name,
    getAge: () => y,
    getJob: () => job,
    setAge: (newAge) => {
      y = newAge;
    },
  };
};

const person = Person({
  name: 'Isaac',
  age: 25,
  job: 'developer',
});

console.log(person.getName());
person.setAge(34);
console.log(person.getAge());
