const words = [
  'Isaac',
  'Jacob',
  'Afi',
  'Theresa',
  'Dolley',
  'Babalola',
];
const THRESHOLD = 5;

const createLengthTest = (minLength) => (word) => word.length < minLength;

const longWords = words.filter(createLengthTest(THRESHOLD));

console.log(longWords);
