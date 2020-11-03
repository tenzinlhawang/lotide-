const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" }; 
  const ba = { b: "2", a: "1" };
  it("should return true for (ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  
  it("should return false for (ab, abc)", () => {
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
});


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false