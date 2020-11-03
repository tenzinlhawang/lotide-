const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (let elem of array) {
    if (!callback(elem)) {  // if callback value is not falsy
      result.push(elem);  //when function is not true push
    } else { // if falsy value detected, returns the array until it is truthy
      return result;
    }
  }
}

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

module.exports = takeUntil;