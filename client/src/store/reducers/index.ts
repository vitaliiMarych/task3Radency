import { combineReducers } from "redux";
import { notesReducer } from "./notes";
import { notesStatsReducer } from "./noteStats";

export const rootReducer = combineReducers({
    notesStats: notesStatsReducer,
    note: notesReducer,
})

export type rootState = ReturnType<typeof rootReducer>;
