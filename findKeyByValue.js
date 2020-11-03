const assertEqual = require('./assertEqual');
/*
const findKeyByValue = function (obj, val) {
  const objKeys = Object.keys(obj);
  // console.log(objKeys);
  for (const key of objKeys) {
    if (obj[key] === val){
      return key;
    }
}
};
*/
const findKeyByValue = function (obj, val) {
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;