import { getAll } from "../repositories/repo";
import { Category } from "../types/categoryTypes"

export const getInfoAboutCategories = () => {

    const categories = [Category.IDEA, Category.RANDOM_THOUGHT, Category.TASK]
    const notes = getAll();

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
