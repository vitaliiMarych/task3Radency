import { CategoryType } from "../types/categoryTypes";
import { NoteType } from "../types/notesTypes";
import { extractDatesMentioned } from "./utilsData";

export const isBig = (index: number) => {
    if (index === 1){
        return true;
    }
    return false;
}

export function updateObject<T>(oldObject: T, propertyToChange: keyof T, newValue: T[keyof T]): T {
    const updatedObject = { ...oldObject };
  
    updatedObject[propertyToChange] = newValue;
  
    return updatedObject;
  }

export const getCells = (item: NoteType | CategoryType) => {
  if ('activeCount' in item) {
    return getNoteCellsCategory(item)
  }
  return getNoteCells(item);
}

const getNoteCells = (note: NoteType) => {
  const datesMentioned = extractDatesMentioned(note.content);
  const cells = [note.createdTime, note.content, note.category, datesMentioned.join(', '),];

  return cells;
} 

const getNoteCellsCategory = (categoryInfo: CategoryType) => {
    return [categoryInfo.category.toString(), categoryInfo.activeCount.toString(), categoryInfo.archivedCount.toString()];
}


