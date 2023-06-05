import { Competable } from "../interface/iCompetable";

class FantasyFootballCompetition<T> implements Competable<T> {
    competitors: T[] = [];
    admin: string = "";
    playerCap: number = 20;
    draftees: string[] = [];
    constructor(cAdmin: string) {
        this.admin = cAdmin;
    }
    addCompetitor(competitor: T): void {
        this.competitors.push(competitor);
    };
    competitionDetails(): Array<T> {
        return this.competitors;
    };
    draftPlayer(rookie: string){
        this.draftees.push(rookie)
    }
}