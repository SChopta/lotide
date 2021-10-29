// FUNCTION IMPLEMENTATION
/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;