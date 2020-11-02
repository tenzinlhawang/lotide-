const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.filter((elem, index) => index !== 0);
};

module.exports = tail;