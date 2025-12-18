import { Database } from 'bun:sqlite';
import { ConversationExchange } from './types.js';
export declare function migrateSchema(db: Database): void;
export declare function initDatabase(): Database;
export declare function insertExchange(db: Database, exchange: ConversationExchange, embedding: number[], toolNames?: string[]): void;
export declare function getAllExchanges(db: Database): Array<{
    id: string;
    archivePath: string;
}>;
export declare function getFileLastIndexed(db: Database, archivePath: string): number | null;
export declare function deleteExchange(db: Database, id: string): void;
