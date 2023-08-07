import { HttpException } from '@nestjs/common';
import { Note } from './notes.entity';
import { categoryesService } from 'src/categoryes/categoryes.service';
import { Category } from 'src/categoryes/interfaces/category.interface';
export declare class NotesService {
    private notesRepository;
    private readonly categoryHelper;
    constructor(notesRepository: typeof Note, categoryHelper: categoryesService);
    getAllNotes(): Promise<Note[] | HttpException>;
    getOneNote(id: number): Promise<Note | HttpException>;
    getNoteStats(): Promise<any[] | HttpException>;
    addNote(noteContent: string, noteCategory: Category): Promise<HttpException>;
    removeNote(id: number): Promise<HttpException>;
    updateNote(id: number, noteContent: string, noteCategory: Category): Promise<HttpException>;
    archiveNote(id: number): Promise<HttpException>;
    unarchiveNote(id: number): Promise<HttpException>;
}
