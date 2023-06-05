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
// const compareWord = (first: string, second: string) : "first is earlier" | "same" | "first is later" => {
//     if (first < second)
//         return "first is earlier"
//     if (first > second)
//         return "first is later"
//     return "same"
// }

// console.log(compareWord("Bernard", "Bernards"))

// // return a specific integer
// const compare = (a: number, b: number): -1 | 0 | 1 => {
//     return a === b ? 0 : a > b ? 1 : -1;
// }

// console.log(compare(1,1))

// Boolean
// return value alias
// type returnable = "returnString" | "returnNumber"
// const irCalculator = (
//     p: number, 
//     r:number, 
//     returnValue: returnable
//     ) => {
//         if (returnValue === "returnNumber")
//             return p*r;
//         else
//             return `$${p*r}`
// };

// let investment = irCalculator(1000, 0.10, "returnNumber");
// console.log("Interest is " + investment)
// console.log(typeof(investment))

// Callback function
// let interestCalc = function iCalc(x: number, y: number){return x * y} ;
// let iCalc: (x: number, y: number) => number;
// const irCalculator = (p: number, r: number) => p*r
// iCalc = irCalculator;

// const printInterest = (p: number, r: number, fIntCalc: Function) => fIntCalc(p, r)

// console.log(iCalc(1000, 0.10))
// console.log(printInterest(1000, 0.10, iCalc))

// Data Structure
// const posts: string[] = []
// type post = {
//     userId: number;
//     postId: number;
//     title: string;
//     body: {
//         topic: any,
//         explanation: string
//     };
// }

// const myPost: post = {
//     userId: 1,
//     postId: 1,
//     title: "TypeScript",
//     body: {
//         topic: "",
//         explanation: "Adds functionality"
//     }
// }

// console.log(myPost.title)

// // JavaScript
// if (myPost.body && myPost.body.topic) console.log(myPost.body.topic)
// // TypeScript
// // posts.push(myPost.body.topic || "No Topic")
// // To remove null or undefined value use ??
// posts.push(myPost.body.topic ?? "No Topic")
// if(myPost.body?.topic) console.log(myPost.title)
// console.log(posts)

// OOP
// class Competetion {
//     // competitionName: string = "";
//     private competetors: string[] = [];
//     private admin: string = "";
//     constructor(
//         private competitionName: string,
//         private readonly compId: number
//         ) {
//     }
//     addCompetitor(comptetitor: string) {
//         this.competetors.push(comptetitor)
//     }
//     competitionDetails() {
//         return this.competitionName + ', ' + this.compId;
//     }
//     get competitionID() {
//         return this.compId
//     }
//     set competitionAdmin(adminName: string) {
//         if (adminName != "Bernard") this.admin = adminName;
//     }
// }

// const competetion = new Competetion("Weight Loss COmpetetion 20233", 100);
// competetion.addCompetitor("Competitor 1");
// console.log(competetion.competitionDetails());
// console.log(competetion.competitionID)
// competetion.competitionAdmin = "Taiga";
// console.log(competetion);

// INTERFACE
// Interface is a structure that defines that contract in your application.
// A blueprint for a class (concrete class).
// It defines the syntax for classes to follow.
// Interface is not usable it's just defining how you class should look like.
// interface Competable {
//     competitors: string[];
//     admin: string;
//     // Optional - add ?
//     backupAdmin?: string;
//     // Functions
//     addCompetitor(competitor: string): void;
//     competitionDetails(): string;
// };

// class WeightLossCompetition implements Competable {
//     competitors: string[] = [];
//     admin: string = "";
//     backupAdmin: string = "";
//     addCompetitor(competitor: string): void {
//         this.competitors.push(competitor);
//     };
//     addBackupAdmin(backupAdmin: string): void {
//         this.backupAdmin = backupAdmin;
//     }
//     competitionDetails(): string {
//         return this.competitors.toString();
//     };
// }

// class FantasyFootballCompetition implements Competable {
//     competitors: string[] = [];
//     admin: string = "";
//     playerCap: number = 20;
//     draftees: string[] = [];
//     constructor(cAdmin: string) {
//         this.admin = cAdmin;
//     }
//     addCompetitor(competitor: string): void {
//         this.competitors.push(competitor);
//     };
//     competitionDetails(): string {
//         return this.competitors.toString();
//     };
//     draftPlayer(rookie: string){
//         this.draftees.push(rookie)
//     }
// }

// MODULE
import { WeightLossCompetition } from "./class/WeightLossCompetition.js"
const weightLostCompete = new WeightLossCompetition()
weightLostCompete.addCompetitor("Ryuuji")
weightLostCompete.addCompetitor({
  name: "Bernard",
  number: 9  
})
console.log(weightLostCompete.competitionDetails())

// TYPES
// type Competitor = {
//     cName: string;
//     dateJoin: Date;
// }

// type Admins = {
//     adminID: number;
// }

// type adminCompetitor = Competitor & Admins;

// const bernard: adminCompetitor = {
//     adminID: 123,
//     cName: "Bernard",
//     dateJoin: new Date("6/4/2022")
// }

// const getDaysJoined = (competitor: adminCompetitor) => {
//     var today = new Date();
//     if ("dateJoin" in competitor) {
//         var daysJoined = today.getTime() - competitor.dateJoin.getTime()    
//         return Math.ceil(daysJoined / 1000 / 60 / 60 / 24)
//     }
// }

// console.log(bernard)
// console.log(bernard.cName + " joined on " + bernard.dateJoin.toLocaleDateString('en-US'))
// console.log(getDaysJoined(bernard) + " day/s.")

// GENERICS

