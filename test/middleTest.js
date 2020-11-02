const middle = require('../middle');
const assertArrayEqual = require('../assertArraysEqual');

assertArrayEqual(middle([1, 2, 3]), [2]); 
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) 
assertArrayEqual(middle([1, 2, 3, 4]), [2,3])