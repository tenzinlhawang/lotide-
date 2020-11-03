const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const without = function (source, itemsToRemove) {
  const result = [];
  source.forEach(item =>
    !itemsToRemove.includes(item) && result.push(item));
    return result;

}
// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

module.exports = without;
