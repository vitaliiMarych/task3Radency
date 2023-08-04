import { Category } from 'src/categoryes/interfaces/category.interface';
import { NoteType } from 'src/notes/interfaces/notes.interface';
export declare class fakeRepositoryService {
    private notes;
    getAll: () => {
        id: number;
        createdTime: string;
        content: string;
        category: Category;
        archived: boolean;
    }[];
    getById: (id: number) => {
        id: number;
        createdTime: string;
        content: string;
        category: Category;
        archived: boolean;
    };
    addNote: (note: NoteType) => void;
    deleteById: (id: number) => void;
    updateById: (idNote: number, noteContent: string, noteCategory: Category, archived: boolean) => void;
}
