import { NotesAction, NotesActionsTypes, NotesState } from "../../types/notesTypes";


const initialState: NotesState = {
    notes: [],
    loadingNotes: false,
}

export const notesReducer = (state = initialState, action:NotesAction) => {
    
    switch (action.type) {
        case NotesActionsTypes.FETCH_NOTE : {
          return {
            loadingNotes: true,
            notes: [],
          }
        }

        case NotesActionsTypes.FETCH_NOTE_ERROR : {
          return {
            loadingNotes: false,
            notes: [],
          }
        }

        case NotesActionsTypes.FETCH_NOTE_SUCCESS : {
          return {
            loadingNotes: false,
            notes: action.payload,
          }
        }

        case NotesActionsTypes.DELETE_NOTE : {
          return {...state, notes: state.notes.filter(note => note.id !== action.payload)};
        }

        case NotesActionsTypes.ARCHIVE_OR_UNARCHIVE_NOTE : {
          const updatedNotes = state.notes.map((note) =>
            note.id === action.payload ? { ...note, archived: !note.archived } : note
          );
          
          return { ...state, notes: updatedNotes };
        }
        
        default: 
            return state;
    }

}
