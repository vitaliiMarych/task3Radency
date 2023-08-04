
import {Injectable} from '@nestjs/common';
import { Category } from './interfaces/category.interface';
import { fakeRepositoryService } from 'src/repository/repository.service';
import { NoteType } from 'src/notes/interfaces/notes.interface';

@Injectable()
export class categoryesService {

    public getInfoAboutCategories(notes: NoteType[])  {

        const categories = [Category.IDEA, Category.RANDOM_THOUGHT, Category.TASK]
    
        let result = [];
    
        categories.forEach((category, index) => {
            const activeCount = notes.filter(note => note.category === category && !note.archived).length;
            const archivedCount = notes.filter(note => note.category === category && note.archived).length;
          
            result.push({
              id: -index - 1000, //unique id for key in react
              category: category,
              activeCount,
              archivedCount,
            })
        })
    
        return result;
    }
}