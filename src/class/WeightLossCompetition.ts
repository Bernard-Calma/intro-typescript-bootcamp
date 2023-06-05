import { Competable } from "../iCompetable";

export class WeightLossCompetition implements Competable {
    competitors: string[] = [];
    admin: string = "";
    backupAdmin: string = "";
    addCompetitor(competitor: string): void {
        this.competitors.push(competitor);
    };
    addBackupAdmin(backupAdmin: string): void {
        this.backupAdmin = backupAdmin;
    }
    competitionDetails(): string {
        return this.competitors.toString();
    };
}

// MODULE