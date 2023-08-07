
import { Table, Column, Model, DataType, AutoIncrement, PrimaryKey} from 'sequelize-typescript';
import { Category } from 'src/categoryes/interfaces/category.interface';


@Table({tableName: 'notes', timestamps: false})
export class Note extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column({type:DataType.INTEGER, unique:true})
  id: number;

  @Column({type:DataType.STRING})
  createdTime: string;

  @Column({type:DataType.STRING})
  content: string;

  @Column({type:DataType.STRING})
  category: Category;

  @Column({type:DataType.BOOLEAN})
  archived: boolean;
}