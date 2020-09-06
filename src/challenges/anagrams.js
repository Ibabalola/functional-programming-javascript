const words = require('an-array-of-english-words');

// const findAnagrams = (word, allWords) => {
//   const letters = word.split('');
//   const isCharMatch = (letter, c) => c.includes(letter);

//   const anagrams = allWords.map((currWord) => {
//     const chars = currWord.split('');
//     const isMatch = letters.every((letter) => isCharMatch(letter, chars));
//     const isAnagram = isMatch && chars.length === letters.length;

//     if (isAnagram) {
//       return currWord;
//     }

//     return null;
//   });

//   return anagrams.filter((anagram) => anagram !== null && anagram !== word);
// };

const isAnagram = (word1, word2) => {
  const letters = word1.split('');
  const chars = word2.split('');
  return letters.every((letter) => chars.includes(letter)) && letters.length === chars.length;
};

const findAnagrams = (word, allWords) => allWords
  .reduce((acc, currWord) => (isAnagram(word, currWord) ? [...acc, currWord] : acc), [])
  .filter((allWord) => allWord !== word);

console.log(findAnagrams('cinema', words));

/*
  Expected output: ['icemand', 'anemic']
  - No use of mutations
  - No use of RegEx
*/
