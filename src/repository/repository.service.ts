import { Injectable } from '@nestjs/common';
import { Category } from 'src/categoryes/interfaces/category.interface';
import { NoteType } from 'src/notes/interfaces/notes.interface';

@Injectable()
export class fakeRepositoryService {
  private notes = [
    {
      id : 1,
      createdTime: '2023-7-25',
      content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
      category: Category.TASK,
      archived: false,
    },
  
    {
      id : 2,
      createdTime: '2023-7-24',
      content: "This is a random thought.",
      category: Category.RANDOM_THOUGHT,
      archived: false,
    },
  
    {
      id : 3,
      createdTime: '2023-7-23',
      content: "I have an idea for a new project.",
      category: Category.IDEA,
      archived: false,
    },
  
    {
      id : 4,
      createdTime: '2023-7-22',
      content: "Remember to buy groceries on 27/7/2021.",
      category: Category.TASK,
      archived: true,
    },
  
    {
      id : 5,
      createdTime: '2023-7-21',
      content: "Don't forget the meeting on 26/7/2021.",
      category: Category.TASK,
      archived: false,
    },
  
    {
      id : 6,
      createdTime: '2023-7-20',
      content: "I need to call the support team tomorrow.",
      category: Category.TASK,
      archived: false,
    },
  
    {
      id : 7,
      createdTime: '2023-7-19',
      content: "I had an interesting idea today.",
      category: Category.IDEA,
      archived: false,
    },
  
    {
      id : 8,
      createdTime: '2023-7-18',
      content: "This is an archived note.",
      category: Category.TASK,
      archived: true,
    },
  
    {
      id : 9,
      createdTime: '2023-7-16',
      content: "I had an archived idea.",
      category: Category.IDEA,
      archived: true,
    }
  ] 

  public getAll= () => {
    return this.notes;
  }
  
  public getById = (id: number) => {
    const note = this.notes.find(note => note.id === id);
    
    if (!note){
        throw new Error('Error to get note id: ' + id);
    }
    
    return note;
  }
  
  public addNote = (note: NoteType) => {
    this.notes.push(note);
  }
      
  public deleteById = (id: number) => {
    const deletedNote = this.notes.find(note => note.id === id);
    
    if (!deletedNote){
        throw new Error('Error to delete note')
    }
    
    this.notes = this.notes.filter(note => note !== deletedNote);
  }
  
  public updateById = (idNote: number, noteContent: string, noteCategory: Category, archived: boolean) => {
    const note = this.notes.find(note => note.id === idNote);

    if (!note){
        throw new Error('Error to update note')
    }
    
    this.notes = this.notes.map((note) =>
    note.id === idNote ? {
        ...note,
        content: noteContent,
        category: noteCategory,
        archived: archived,
    } : note)
  }
}