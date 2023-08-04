import { NoteType, NotesRepoType } from "../types/notesTypes";

const NotesRepo: NotesRepoType = {
    notes: [
        {
            id : 1,
            createdTime: '2023-7-25',
            content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
            category: "Task",
            archived: false,
          },
        
          {
            id : 2,
            createdTime: '2023-7-24',
            content: "This is a random thought.",
            category: "Random Thought",
            archived: false,
          },
        
          {
            id : 3,
            createdTime: '2023-7-23',
            content: "I have an idea for a new project.",
            category: "Idea",
            archived: false,
          },
        
          {
            id : 4,
            createdTime: '2023-7-22',
            content: "Remember to buy groceries on 27/7/2021.",
            category: "Task",
            archived: true,
          },
        
          {
            id : 5,
            createdTime: '2023-7-21',
            content: "Don't forget the meeting on 26/7/2021.",
            category: "Task",
            archived: false,
          },
        
          {
            id : 6,
            createdTime: '2023-7-20',
            content: "I need to call the support team tomorrow.",
            category: "Task",
            archived: false,
          },
        
          {
            id : 7,
            createdTime: '2023-7-19',
            content: "I had an interesting idea today.",
            category: "Idea",
            archived: false,
          },
        
          {
            id : 8,
            createdTime: '2023-7-18',
            content: "This is an archived note.",
            category: "Task",
            archived: true,
          },
        
          {
            id : 9,
            createdTime: '2023-7-16',
            content: "I had an archived idea.",
            category: "Idea",
            archived: true,
          }
    ],
}

export const getAll= () => {
  return NotesRepo.notes;
}

export const getById = (id: number) => {
  const note = NotesRepo.notes.find(note => note.id === id);

  if (!note){
    throw new Error('Error to get note id: ' + id);
  }

  return note;
}

export const addNote = (note: NoteType) => {
  NotesRepo.notes.push(note);
}

export const deleteById = (id: number) => {
  const deletedNote = NotesRepo.notes.find(note => note.id === id);

  if (!deletedNote){
    throw new Error('Error to delete note')
  }

  NotesRepo.notes = NotesRepo.notes.filter(note => note !== deletedNote);
}

export const updateById = (idNote: number, noteContent: string, noteCategory: string, archived: boolean) => {
  const note = NotesRepo.notes.find(note => note.id === idNote);

  if (!note){
    throw new Error('Error to update note')
  }

  NotesRepo.notes = NotesRepo.notes.map((note) =>
  note.id === idNote ? {
    ...note,
      content: noteContent,
      category: noteCategory,
      archived: archived,
  } : note)

}
