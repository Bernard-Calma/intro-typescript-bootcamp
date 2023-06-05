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
        return this.competitors;
    }
    ;
    draftPlayer(rookie) {
        this.draftees.push(rookie);
    }
}
export {};
