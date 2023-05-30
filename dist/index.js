"use strict";
// Fucntion Types
// A Function can be passed into another function
const fTest = (x, cbf) => {
    cbf(x);
};
const showResult = (x) => {
    console.log("Result is " + x);
};
fTest(1000, showResult);
