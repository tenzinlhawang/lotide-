const assertEqual = function(arr1, arr2) {
  if (arr1 === arr2) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else if (arr1 !== arr2) {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

const without = function (source, itemsToRemove) {
  const result = [];
  source.forEach(item =>
    !itemsToRemove.includes(item) && result.push(item));
    return result;

}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
