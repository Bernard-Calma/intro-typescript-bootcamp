import { WeightLossCompetition } from "./class/WeightLossCompetition.js";
const weightLostCompete = new WeightLossCompetition();
weightLostCompete.addCompetitor("Ryuuji");
weightLostCompete.addCompetitor({
    name: "Bernard",
    number: 9
});
console.log(weightLostCompete.competitionDetails());
