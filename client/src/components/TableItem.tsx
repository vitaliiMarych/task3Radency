import React from 'react';

import TableItemCell from './TableItemCell';
import { getCells, isBig } from '../utils/otherUtils';
import ButtonDiv from './UI/ButtonDiv/ButtonDiv';
import { NoteType } from '../types/notesTypes';
import { CategoryType } from '../types/categoryTypes';

interface TableItemProps {
  extraClasses: string,
  item: NoteType | CategoryType,
  setModalProperties: Function,

}

const TableItem: React.FC<TableItemProps> = ({
  extraClasses,
  item,
  setModalProperties,

}) => {

  const cells = getCells(item);
  const cl = 'notesTableRow blueRow ' + extraClasses;

  const addBigItem = cells.length > 3;

  const returnBigItem = (index: number, cell: string) => {
    return <TableItemCell haveBigItem = {isBig(index)} key={index}>{cell}</TableItemCell>
  }

  const returnSmallItem = (index: number, cell: string) => {
    return <TableItemCell key={index}>{cell}</TableItemCell>
  }

  const returnButtonDiv = () => {
    return <ButtonDiv idNote={item.id} extraClasses={extraClasses} setModalProperties={setModalProperties}/> 
  }

  return (
    <div className={cl}>

      {cells.map((cell, index) => 
        addBigItem ?
          returnBigItem(index, cell) : returnSmallItem(index, cell)
      )}

      {addBigItem ? returnButtonDiv() : ''}
    </div>
  )
}
  
  
export default TableItem;

