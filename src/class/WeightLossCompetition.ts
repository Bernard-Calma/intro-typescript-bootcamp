import { Competable } from "../interface/iCompetable";

export class WeightLossCompetition<T> implements Competable<T> {
    competitors: T[] = [];
    admin: string = "";
    backupAdmin: string = "";
    addCompetitor(competitor: T): void {
        this.competitors.push(competitor);
    };
    addBackupAdmin(backupAdmin: string): void {
        this.backupAdmin = backupAdmin;
    }
    competitionDetails(): Array<T> {
        return this.competitors;
    };
}

// MODULE