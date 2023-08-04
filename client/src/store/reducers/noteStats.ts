import { NotesStatsAction, NotesStatsActionsTypes, NotesStatsState } from "../../types/notesStatsTypes";


const initialState: NotesStatsState = {
    notesStats: [],
    loadingNotesStats: false,
}

export const notesStatsReducer = (state = initialState, action: NotesStatsAction) => {
    
    switch (action.type) {
        case NotesStatsActionsTypes.FETCH_NOTES_STATS : {
            return {
                loadingNotesStats: true,
                notesStats: [],
              }
        }

        case NotesStatsActionsTypes.FETCH_NOTES_STATS_SUCCESS : {
            return {
                loadingNotesStats: false,
                notesStats: action.payload,
              }
        }
        
        case NotesStatsActionsTypes.FETCH_NOTES_STATS_ERROR : {
            return {
                loadingNotesStats: false,
                notesStats: [],
              }
        }

        default: 
            return state;
    }

}
