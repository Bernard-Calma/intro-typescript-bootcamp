"use strict";
const compareWord = (first, second) => {
    if (first < second)
        return "first is earlier";
    if (first > second)
        return "first is later";
    return "same";
};
console.log(compareWord("Bernard", "Bernards"));
const compare = (a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
};
console.log(compare(1, 1));
