import { Category } from "src/categoryes/interfaces/category.interface";
export interface NoteType {
    id: number;
    createdTime: string;
    content: string;
    category: Category;
    archived: boolean;
}
