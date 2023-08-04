import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { fakeRepositoryService } from 'src/repository/repository.service';
import { categoryesService } from 'src/categoryes/categoryes.service';


@Module({
  controllers: [NotesController],
  providers: [NotesService, fakeRepositoryService, categoryesService],
})
export class NotesModule {}
