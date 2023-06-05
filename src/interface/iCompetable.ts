// Gerneric Interface
// Adding <T> T could be any will make the interface Generic
export interface Competable<T> {
    competitors: T[];
    admin: string;
    // Optional - add ?
    backupAdmin?: string;
    // Functions
    addCompetitor(competitor: T): void;
    competitionDetails(): Array<T>;
};

// MODULES
