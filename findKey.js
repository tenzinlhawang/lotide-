const assertEqual = require('./assertEqual');
const findKeyByValue = require('./findKeyByValue');

const findKey = (obj, callback) => {
  // traverse through obj
  // return first key for which the callback returns a truthy value'
  // use for..in for objects

  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    } 
  } return undefined; // dont need to write undefined as well(implicit)
}

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)) // => "noma"

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");

module.exports = findKey;

