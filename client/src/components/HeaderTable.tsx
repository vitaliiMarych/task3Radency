import React from 'react';
import { isBig } from '../utils/otherUtils';


interface HeaderTableProps {
    isCategory: boolean;
}

const HeaderTable: React.FC<HeaderTableProps> = ({
    isCategory
  }) => {
  const smallHeaderTable = ['Category', 'Active Notes Count', 'Archived Notes Count'];
  const bigHeaderTable = ['Time of creation','Note content','Note category','Dates','Actions'];

  const current = isCategory ? smallHeaderTable : bigHeaderTable;

  return (
    <div className='notesTableHeader'>
      <div className='notesTableRow grayRow'>
        {current.map((cell, index) => (
          <div className={'notesTableCell ' + ((!isCategory && isBig(index)) ? 'bigItem' : '')}>{cell}</div>
        ))}
      </div>
    </div>
  );
}
  
  
export default HeaderTable;
