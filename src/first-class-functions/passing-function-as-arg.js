const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);
const diff2and3 = (func) => func(2, 3);

console.log(combine2and3(add));
console.log(combine2and3((x, y) => x + y));
console.log(combine2and3(Math.max));
console.log(diff2and3(subtract));
