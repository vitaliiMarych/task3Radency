import { Category } from "./categoryTypes";

export enum NotesActionsTypes {
    ADD_NOTE = 'ADD_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
    ARCHIVE_OR_UNARCHIVE_NOTE = 'ARCHIVE_OR_UNARCHIVE_NOTE',
    FETCH_NOTE = 'FETCH_NOTE',
    FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS',
    FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR',
}

export interface NotesState {
    notes: any[];
    loadingNotes: boolean;
}

export interface NoteType {
    id: number;
    createdTime: string;
    content: string;
    category: Category;
    archived: boolean;
}

interface NotesActionFetch {
    type: NotesActionsTypes.FETCH_NOTE;

}

interface NotesActionFetchSuccess {
    type: NotesActionsTypes.FETCH_NOTE_SUCCESS;
    payload: NoteType[];

}

interface NotesActionFetchError {
    type: NotesActionsTypes.FETCH_NOTE_ERROR;
    payload: string;
}

interface NotesActionsDeleteOrArchive {
    type: NotesActionsTypes.ARCHIVE_OR_UNARCHIVE_NOTE | NotesActionsTypes.DELETE_NOTE;
    payload: number;
}

export type NotesAction = NotesActionsDeleteOrArchive | NotesActionFetch | NotesActionFetchSuccess | NotesActionFetchError;
