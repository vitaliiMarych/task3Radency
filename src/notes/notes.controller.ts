import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateOrUpdateCatDto } from './dto/createNoteOrUpdate.dto';

@Controller('api/notes')
export class NotesController {
    constructor(
        private readonly notesService: NotesService
    ) {}

    @Get()
    async getAllNotes() {
      return this.notesService.getAllNotes();
    }
   
    @Get('/stats')
    async getNoteStats() {
      return this.notesService.getNoteStats();
    }

    @Get(':id')
    async getNoteById(@Param('id', ParseIntPipe) id: number) {
      return this.notesService.getOneNote(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true, whitelist:true, forbidNonWhitelisted: true,}))
    async createNote(@Body() note: CreateOrUpdateCatDto) {
      return this.notesService.addNote(note.noteContent, note.noteCategory);
    }

    @Delete(':id')
    async deleteNote(@Param('id', ParseIntPipe) id: number) {
      return this.notesService.removeNote(id);
    }

    @Patch('archive/:id')
    async archiveNote(@Param('id', ParseIntPipe) id: number) {
      return this.notesService.archiveNote(id);
    }

    @Patch('unarchive/:id')
    async unarchiveNote(@Param('id', ParseIntPipe) id: number) {
      return this.notesService.unarchiveNote(id);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true, whitelist:true, forbidNonWhitelisted: true,}))
    async updateNote(@Param('id', ParseIntPipe) id: number,
                     @Body() note: CreateOrUpdateCatDto ) {
      return this.notesService.updateNote(id, note.noteContent, note.noteCategory);
    }

}
