const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');

let countLetters = function(str){
  const results = {};
  for (let char of str) {
    if (char !== ' ') {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  } return results 
};

// console.log(countLetters('lighthouse in the house'));
// assertEqual(countLetters('lighthouse in the house'), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2,u: 2, s: 2, e: 3, n: 1});

module.exports = countLetters;
