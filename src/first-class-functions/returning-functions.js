const createPrinter = () => () => console.log('Hello');

const func = createPrinter();

func();

// const double = x => x * 2;
// const triple = x => x * 3;
// const quadruble = x => X * 4;

const createMultiplier = y => x => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruble = createMultiplier(4);

console.log(double(2));
console.log(triple(2));
console.log(quadruble(2));
