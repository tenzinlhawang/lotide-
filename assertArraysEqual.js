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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);