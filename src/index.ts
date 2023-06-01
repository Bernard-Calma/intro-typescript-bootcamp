// Fucntion Types
// A Function can be passed into another function

// const fTest = (x: number, cbf:(n: number) => void): void => {
//     cbf(x);
// }

// const showResult = (x: number): void => {
//     console.log("Result is " + x);
// }

// fTest(1000, showResult);

// let greeting: string = "Hello World!";
// console.log(greeting);

//
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. 
// enum weekDay {
//     MONDAY, //1
//     TUESDAY, //2
//     WEDNESDAY, //3
//     THURSDAY, //4
//     FRIDAY, //5
//     SATURDAY, //6
//     SUNDAY //7
// }

// String Enums
// enum weekDay {
//     MONDAY = "MONDAY",
//     TUESDAY = "TUESDAY",
//     WEDNESDAY = "WEDNESDAY", 
//     THURSDAY = "THURSDAY",
//     FRIDAY = "FRIDAY",
//     SATURDAY = "SATURDAY",
//     SUNDAY = "SUNDAY"
// }

// const employee: {
//     empName: string,
//     dependents: number,
//     comittees: [string, boolean]
//     payDay: string
// } = {
//     empName: "Axle",
//     dependents: 2,
//     comittees: ["Philantrophy", true],
//     payDay: weekDay.FRIDAY
// }

// employee.comittees[1] = false;
// employee.comittees.push("test", true)
// console.log(employee);

// return a specific string
const compareWord = (first: string, second: string) : "first is earlier" | "same" | "first is later" => {
    if (first < second)
        return "first is earlier"
    if (first > second)
        return "first is later"
    return "same"
}

console.log(compareWord("Bernard", "Bernards"))

// return a specific integer
const compare = (a: number, b: number): -1 | 0 | 1 => {
    return a === b ? 0 : a > b ? 1 : -1;
}

console.log(compare(1,1))