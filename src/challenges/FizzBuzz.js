const fizzBuzz = (count) => {
  let counter = 1;
  while (counter <= count) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log('FizzBuzz');
    } else if (counter % 3 === 0) {
      console.log('Fizz');
    } else if (counter % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(counter);
    }

    counter += 1;
  }
};

fizzBuzz(100);
