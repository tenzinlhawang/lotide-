const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2) {
  let properties1 = Object.keys(object1).sort() // 'a','b' 
  let properties2 = Object.keys(object2).sort();
  console.log('Object keys 1 ', properties1);
  console.log('Object keys 2 ', properties2);
  if (!eqArrays(properties1, properties2)) {
    
    return false;
  }
  for (let i = 0; i < properties1.length; i++) {
    let propertyName = properties1[i];
    let object1Value = object1[propertyName]; // accessing object1 key.
    // console.log(object1Value); 
    let object2Value = object2[propertyName]; // accessing object2 key

    if (Array.isArray(object1Value) && Array.isArray(object2Value)) {
      if (!eqArrays(object1Value, object2Value)) {
        return false;
      }

    } else if (object1Value !== object2Value) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  }
  


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba)); // => true