import { Module } from "@nestjs/common";
import { NotesModule } from './notes/notes.module';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'task3',
    autoLoadModels: true,

  }), NotesModule]
})
export class AppModule {

}