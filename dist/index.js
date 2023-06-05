"use strict";
const bernard = {
    adminID: 123,
    cName: "Bernard",
    dateJoin: new Date("6/4/2022")
};
const getDaysJoined = (competitor) => {
    var today = new Date();
    if ("dateJoin" in competitor) {
        var daysJoined = today.getTime() - competitor.dateJoin.getTime();
        return Math.ceil(daysJoined / 1000 / 60 / 60 / 24);
    }
};
console.log(bernard);
console.log(bernard.cName + " joined on " + bernard.dateJoin.toLocaleDateString('en-US'));
console.log(getDaysJoined(bernard) + " day/s.");
