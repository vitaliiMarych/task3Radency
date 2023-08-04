import { HttpException } from '@nestjs/common';
import { categoryesService } from 'src/categoryes/categoryes.service';
import { Category } from 'src/categoryes/interfaces/category.interface';
import { fakeRepositoryService } from 'src/repository/repository.service';
export declare class NotesService {
    private readonly repository;
    private readonly categoryHelper;
    constructor(repository: fakeRepositoryService, categoryHelper: categoryesService);
    getAllNotes(): {
        id: number;
        createdTime: string;
        content: string;
        category: Category;
        archived: boolean;
    }[] | HttpException;
    getOneNote(id: number): {
        id: number;
        createdTime: string;
        content: string;
        category: Category;
        archived: boolean;
    } | HttpException;
    getNoteStats(): any[] | HttpException;
    addNote(noteContent: string, noteCategory: Category): HttpException;
    removeNote(id: number): HttpException;
    updateNote(id: number, noteContent: string, noteCategory: Category): HttpException;
    archiveNote(id: number): HttpException;
    unarchiveNote(id: number): HttpException;
}
