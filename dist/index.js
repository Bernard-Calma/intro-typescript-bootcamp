"use strict";
;
class WeightLossCompetition {
    constructor() {
        this.competitors = [];
        this.admin = "";
        this.backupAdmin = "";
    }
    addCompetitor(competitor) {
        this.competitors.push(competitor);
    }
    ;
    addBackupAdmin(backupAdmin) {
        this.backupAdmin = backupAdmin;
    }
    competitionDetails() {
        return this.competitors.toString();
    }
    ;
}
class FantasyFootballCompetition {
    constructor(cAdmin) {
        this.competitors = [];
        this.admin = "";
        this.playerCap = 20;
        this.draftees = [];
        this.admin = cAdmin;
    }
    addCompetitor(competitor) {
        this.competitors.push(competitor);
    }
    ;
    competitionDetails() {
        return this.competitors.toString();
    }
    ;
    draftPlayer(rookie) {
        this.draftees.push(rookie);
    }
}
const weightLostCompete = new WeightLossCompetition();
console.log(weightLostCompete);
