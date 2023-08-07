import { NotesService } from './notes.service';
import { CreateOrUpdateCatDto } from './dto/createNoteOrUpdate.dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    getAllNotes(): Promise<import("./notes.entity").Note[] | import("@nestjs/common").HttpException>;
    getNoteStats(): Promise<any[] | import("@nestjs/common").HttpException>;
    getNoteById(id: number): Promise<import("./notes.entity").Note | import("@nestjs/common").HttpException>;
    createNote(note: CreateOrUpdateCatDto): Promise<import("@nestjs/common").HttpException>;
    deleteNote(id: number): Promise<import("@nestjs/common").HttpException>;
    archiveNote(id: number): Promise<import("@nestjs/common").HttpException>;
    unarchiveNote(id: number): Promise<import("@nestjs/common").HttpException>;
    updateNote(id: number, note: CreateOrUpdateCatDto): Promise<import("@nestjs/common").HttpException>;
}
