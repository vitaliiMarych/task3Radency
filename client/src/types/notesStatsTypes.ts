import { CategoryType } from "./categoryTypes";

export interface NotesStatsState {
    notesStats: CategoryType[],
    loadingNotesStats: false,
}

export enum NotesStatsActionsTypes {
    FETCH_NOTES_STATS = 'FETCH_NOTES_STATS',
    FETCH_NOTES_STATS_SUCCESS = 'FETCH_NOTES_STATS_SUCCESS',
    FETCH_NOTES_STATS_ERROR = 'FETCH_NOTES_STATS_ERROR',
}

interface NotesStatsActionFetch {
    type: NotesStatsActionsTypes.FETCH_NOTES_STATS
}

interface NotesStatsActionFetchSuccess {
    type: NotesStatsActionsTypes.FETCH_NOTES_STATS_SUCCESS,
    payload: CategoryType[];
}

interface NotesStatsActionFetchError {
    type: NotesStatsActionsTypes.FETCH_NOTES_STATS_ERROR
    payload: string;
}

export type NotesStatsAction = NotesStatsActionFetchError | NotesStatsActionFetchSuccess | NotesStatsActionFetch;
