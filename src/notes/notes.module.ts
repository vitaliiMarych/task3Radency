import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { categoryesService } from 'src/categoryes/categoryes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './notes.entity';


@Module({
  imports: [SequelizeModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService, categoryesService,],
})
export class NotesModule {}
