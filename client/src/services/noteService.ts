import { NoteType } from "../types/notesTypes";

export const getActiveNotes = (notes: NoteType[]) => {
  return notes.filter(note => !note.archived);
}

export const getArchiveNotes = (notes: NoteType[]) => {
  return notes.filter(note => note.archived);
}

export const getAllNotes = (notes: NoteType[]) => {
  return notes;
}

