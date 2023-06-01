"use strict";
let interestCalc = function iCalc(x, y) { return x * y; };
let iCalc;
const irCalculator = (p, r) => p * r;
iCalc = irCalculator;
const printInterest = (p, r, fIntCalc) => fIntCalc(p, r);
console.log(iCalc(1000, 0.10));
console.log(printInterest(1000, 0.10, iCalc));
