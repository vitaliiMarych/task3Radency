import { IsIn, IsString, Length } from "class-validator";
import { Category } from "src/categoryes/interfaces/category.interface";

export class CreateOrUpdateCatDto {
  @IsString()
  @Length(3)
  noteContent: string;
  @IsIn([Category.IDEA, Category.RANDOM_THOUGHT, Category.TASK])
  noteCategory: Category;
}
  