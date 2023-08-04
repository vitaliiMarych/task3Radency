import { Dispatch } from "redux";
import { NotesAction, NotesActionsTypes } from "../../types/notesTypes";
import axios from 'axios';

export const fetchNotes = () => {
    return async (dispatch: Dispatch<NotesAction>) => {
        try {
            dispatch({type: NotesActionsTypes.FETCH_NOTE});

            const response = await axios.get('http://localhost:4444/notes');
            console.log(response.data);
            dispatch({type: NotesActionsTypes.FETCH_NOTE_SUCCESS, payload: response.data});

        } catch (err) {
            dispatch({
                type: NotesActionsTypes.FETCH_NOTE_ERROR,
                payload: 'Error in loading notes'
            })
        }
    }
}
