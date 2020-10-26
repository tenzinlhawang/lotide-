const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + "===" + expected);
  } else if (actual !== expected) {
    console.log("Assertion failed: " + actual + "!==" + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Banana", "Banana");
assertEqual(3, 5);