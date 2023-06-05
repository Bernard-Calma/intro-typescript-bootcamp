import { Competable } from "../iCompetable";

class FantasyFootballCompetition implements Competable {
    competitors: string[] = [];
    admin: string = "";
    playerCap: number = 20;
    draftees: string[] = [];
    constructor(cAdmin: string) {
        this.admin = cAdmin;
    }
    addCompetitor(competitor: string): void {
        this.competitors.push(competitor);
    };
    competitionDetails(): string {
        return this.competitors.toString();
    };
    draftPlayer(rookie: string){
        this.draftees.push(rookie)
    }
}