import { Category } from "./categoryTypes";

export enum NotesActionsTypes {
    ADD_NOTE = 'ADD_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    ARCHIVE_OR_UNARCHIVE_NOTE = 'ARCHIVE_OR_UNARCHIVE_NOTE',
    
}

export interface NotesRepoType {
    notes: NoteType[];
}

export interface NoteType {
    id: number;
    createdTime: string;
    content: string;
    category: string;
    archived: boolean;
}


