const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
