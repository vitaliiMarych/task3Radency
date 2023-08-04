import { Dispatch } from "redux";
import { NotesStatsAction, NotesStatsActionsTypes } from "../../types/notesStatsTypes";
import axios from "axios";

export const fetchNotesStats = () => {
    return async (dispatch: Dispatch<NotesStatsAction>) => {
        try {
            dispatch({type: NotesStatsActionsTypes.FETCH_NOTES_STATS});

            const response = await axios.get('http://localhost:4444/notes/stats');
            dispatch({type: NotesStatsActionsTypes.FETCH_NOTES_STATS_SUCCESS, payload: response.data});

        } catch (err) {
            dispatch({
                type: NotesStatsActionsTypes.FETCH_NOTES_STATS_ERROR,
                payload: 'Error in loading notes stats'
            })
        }
    }
}