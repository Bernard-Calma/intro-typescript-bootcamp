import { HiDOM } from "../decorators/HIDOM.js";
import { Competable } from "../interface/iCompetable";
@HiDOM("<h2>Hello World!!!</h2>","#root")
export class WeightLossCompetition<T> implements Competable<T> {
    competitors: T[] = [];
    admin: string = "Bernard";
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