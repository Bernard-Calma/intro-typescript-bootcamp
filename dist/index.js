"use strict";
const compareWord = (first, second) => {
    if (first < second)
        return "first is earlier";
    if (first > second)
        return "first is later";
    return "same";
};
