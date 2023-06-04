"use strict";
class Competetion {
    constructor(competitionName, compId) {
        this.competitionName = competitionName;
        this.compId = compId;
        this.competetors = [];
        this.admin = "";
    }
    addCompetitor(comptetitor) {
        this.competetors.push(comptetitor);
    }
    competitionDetails() {
        return this.competitionName + ', ' + this.compId;
    }
    get competitionID() {
        return this.compId;
    }
    set competitionAdmin(adminName) {
        if (adminName != "Bernard")
            this.admin = adminName;
    }
}
const competetion = new Competetion("Weight Loss COmpetetion 20233", 100);
competetion.addCompetitor("Competitor 1");
console.log(competetion.competitionDetails());
console.log(competetion.competitionID);
competetion.competitionAdmin = "Taiga";
console.log(competetion);
