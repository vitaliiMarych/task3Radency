import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Note } from './notes.entity';
import { InjectModel } from '@nestjs/sequelize';
import { categoryesService } from 'src/categoryes/categoryes.service';
import { NoteType } from './interfaces/notes.interface';
import { Category } from 'src/categoryes/interfaces/category.interface';

@Injectable()
export class NotesService {  
    
  constructor(
      @InjectModel(Note)
      private notesRepository: typeof Note,
      private readonly categoryHelper: categoryesService
  ) {}

  public async getAllNotes() {
    try {
      return await this.notesRepository.findAll<Note>();

    } catch (err) {
      return new HttpException('Error getting all notes', HttpStatus.NOT_FOUND)
    }
  }

  public async getOneNote(id: number) {
    try {
      return await this.notesRepository.findByPk(id);

    } catch(err) {
      return new HttpException('Error getting note', HttpStatus.NOT_FOUND);
    }
  }

  public async getNoteStats() {
    try {
        let arr:NoteType[] = [];
        const res = await this.notesRepository.findAll().then(data => arr = data);

        return this.categoryHelper.getInfoAboutCategories(arr);

    } catch(err) {
        return new HttpException('Error getting stats', HttpStatus.NOT_FOUND);
    }
  }

  public async addNote(noteContent: string, noteCategory:Category) {
    try {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const day = new Date().getDate();

      let arr:NoteType[] = [];
      const res = await this.notesRepository.findAll().then(data => arr = data);
      const newId = Math.max(...arr.map(note => note.id)) + 1;
    
      await this.notesRepository.create({
        id : newId,
        createdTime: `${year}-${month}-${day}`,
        content: noteContent,
        category: 'Task',
        archived: false,})
      return new HttpException('Success', HttpStatus.CREATED);
    
    } catch(err) {
      return new HttpException('Failed to create note', 500);
    }
  }

  public async removeNote(id: number) {
    try {
      await this.notesRepository.destroy({
        where: {
          id: id
        }
      });
      return new HttpException('Success', HttpStatus.OK);

    } catch(err) {
        return new HttpException('Failed to delete note', 500);
    }
  }

  public async updateNote(id: number, noteContent: string, noteCategory: Category) {
    try {
      await this.notesRepository.update({
        content: noteContent,
        category: noteCategory
      }, {
        where: {
          id:id
        }
      })
      return new HttpException('Success', HttpStatus.OK);

    } catch(err) {
        return new HttpException('Failed to update note', 500);
    }
  }

  public async archiveNote(id: number) {
    try {
      await this.notesRepository.update({
        archived: true
      }, {
        where: {
          id:id
        }
      })
      return new HttpException('Success', HttpStatus.OK);

    } catch(err) {
      return new HttpException('Failed to archive note', 500);
    }
  }

  public async unarchiveNote(id: number) {
    try {
      await this.notesRepository.update({
        archived: false
      }, {
        where: {
          id:id
        }
      })
      return new HttpException('Success', HttpStatus.OK);

    } catch(err) {
      return new HttpException('Failed to unarchive note', 500);
    }
  }
}
