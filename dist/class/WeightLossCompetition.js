export class WeightLossCompetition {
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
