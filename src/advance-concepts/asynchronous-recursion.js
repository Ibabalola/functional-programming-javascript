const factorial = 5;

function factorialPromise(n) {
  return new Promise((resolve) => {
    if (n <= 1) {
      resolve(1);
    } else {
      resolve(
        factorialPromise(n - 1)
          .then(((prevFact) => prevFact * n)),
      );
    }
  });
}

factorialPromise(factorial)
  .then((ans) => {
    console.log(`fact(${factorial}) = ${ans}`);
  });
