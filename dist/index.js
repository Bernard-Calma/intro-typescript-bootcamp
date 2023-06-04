"use strict";
class Competetion {
    constructor(competitionName, compId) {
        this.competitionName = competitionName;
        this.compId = compId;
        this.competetors = [];
    }
    addCompetitor(comptetitor) {
        this.competetors.push(comptetitor);
    }
    competitionDetails() {
        return this.competitionName + ', ' + this.compId;
    }
}
const competetion = new Competetion("Weight Loss COmpetetion 20233", 100);
competetion.addCompetitor("Competitor 1");
console.log(competetion);
