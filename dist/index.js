"use strict";
const irCalculator = (p, r, returnValue) => {
    if (returnValue === "returnNumber")
        return p * r;
    else
        return `$${p * r}`;
};
let investment = irCalculator(1000, 0.10, "returnNumber");
console.log("Interest is " + investment);
console.log(typeof (investment));
