import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { categoryesService } from 'src/categoryes/categoryes.service';
import { Category } from 'src/categoryes/interfaces/category.interface';
import { fakeRepositoryService } from 'src/repository/repository.service';

@Injectable()
export class NotesService {  
    
    constructor(
        private readonly repository: fakeRepositoryService,
        private readonly categoryHelper: categoryesService
    ) {}


    public getAllNotes() {
        try {
          return this.repository.getAll();
    
        } catch (err) {
          return new HttpException('Error getting all notes', HttpStatus.NOT_FOUND)
        }
    }

    public getOneNote(id: number) {
        try {
          return this.repository.getById(id);
    
        } catch(err) {
          return new HttpException('Error getting note', HttpStatus.NOT_FOUND);
        }
    }

    public getNoteStats() {
        try {
            return this.categoryHelper.getInfoAboutCategories(this.repository.getAll());

        } catch(err) {
            return new HttpException('Error getting stats', HttpStatus.NOT_FOUND);
        }

    }

    public addNote(noteContent: string, noteCategory:Category) {
        try {
          const year = new Date().getFullYear();
          const month = new Date().getMonth() + 1;
          const day = new Date().getDate();

          const newId = Math.max(...this.repository.getAll().map(note => note.id)) + 1;
        
          this.repository.addNote({
            id : newId,
            createdTime: `${year}-${month}-${day}`,
            content: noteContent,
            category: noteCategory,
            archived: false,})
          return new HttpException('Success', HttpStatus.CREATED);
        
        } catch(err) {
          return new HttpException('Failed to create note', 500);
        }
    }

    public removeNote(id: number) {
        try {
          this.repository.deleteById(id);
          return new HttpException('Success', HttpStatus.OK);


        } catch(err) {
            return new HttpException('Failed to delete note', 500);
        }
    }

    public updateNote(id: number, noteContent: string, noteCategory: Category) {
        try {
            const archiveStatus = (this.repository.getById(id)).archived
            this.repository.updateById(id, noteContent, noteCategory, archiveStatus);
            return new HttpException('Success', HttpStatus.OK);

        } catch(err) {
            return new HttpException('Failed to update note', 500);
        }
    }

    public archiveNote(id: number) {
        try {
            const note = this.repository.getById(id);
            this.repository.updateById(id, note.content, note.category, true);
            return new HttpException('Success', HttpStatus.OK);
        } catch(err) {
            return new HttpException('Failed to archive note', 500);
        }
    }

    public unarchiveNote(id: number) {
        try {
            const note = this.repository.getById(id);
            this.repository.updateById(id, note.content, note.category, false);
            return new HttpException('Success', HttpStatus.OK);
        } catch(err) {
            return new HttpException('Failed to unarchive note', 500);
        }
    }
}
