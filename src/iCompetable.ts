export interface Competable {
    competitors: string[];
    admin: string;
    // Optional - add ?
    backupAdmin?: string;
    // Functions
    addCompetitor(competitor: string): void;
    competitionDetails(): string;
};

// MODULES
