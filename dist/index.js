"use strict";
var weekDay;
(function (weekDay) {
    weekDay["MONDAY"] = "MONDAY";
    weekDay["TUESDAY"] = "TUESDAY";
    weekDay["WEDNESDAY"] = "WEDNESDAY";
    weekDay["THURSDAY"] = "THURSDAY";
    weekDay["FRIDAY"] = "FRIDAY";
    weekDay["SATURDAY"] = "SATURDAY";
    weekDay["SUNDAY"] = "SUNDAY";
})(weekDay || (weekDay = {}));
const employee = {
    empName: "Axle",
    dependents: 2,
    comittees: ["Philantrophy", true],
    payDay: weekDay.FRIDAY
};
employee.comittees[1] = false;
employee.comittees.push("test", true);
console.log(employee);
