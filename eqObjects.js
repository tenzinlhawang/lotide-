const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false



// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true


// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;
