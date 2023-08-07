import { Model } from 'sequelize-typescript';
import { Category } from 'src/categoryes/interfaces/category.interface';
export declare class Note extends Model {
    id: number;
    createdTime: string;
    content: string;
    category: Category;
    archived: boolean;
}
