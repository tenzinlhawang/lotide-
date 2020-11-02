
const eqArrays = require('./eqArrays');

const assertArrayEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let arrResult = [];
  if (arr.length >= 2) {//only if array length > 2
    if (arr.length % 2 === 0) {//for even array length
      arrResult.push(arr[((arr.length) / 2) - 1]);
      arrResult.push(arr[(arr.length) / 2]);
    } else {//for odd array length
      arrResult.push(arr[Math.floor(arr.length /2)]);
    }
  } return arrResult;
};

assertArrayEqual(middle([1, 2, 3]), [2]); 
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) 
assertArrayEqual(middle([1, 2, 3, 4]), [2,3])

module.exports = middle;