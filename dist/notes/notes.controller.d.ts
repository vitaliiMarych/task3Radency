import { HttpException } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateOrUpdateCatDto } from './dto/createNoteOrUpdate.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Promise<{
        id: number;
        createdTime: string;
        content: string;
        category: import("../categoryes/interfaces/category.interface").Category;
        archived: boolean;
    }[] | HttpException>;
    getNoteStats(): Promise<any[] | HttpException>;
    getNoteById(id: number): Promise<{
        id: number;
        createdTime: string;
        content: string;
        category: import("../categoryes/interfaces/category.interface").Category;
        archived: boolean;
    } | HttpException>;
    createNote(note: CreateOrUpdateCatDto): Promise<HttpException>;
    deleteNote(id: number): Promise<HttpException>;
    archiveNote(id: number): Promise<HttpException>;
    unarchiveNote(id: number): Promise<HttpException>;
    updateNote(id: number, note: CreateOrUpdateCatDto): Promise<HttpException>;
}
