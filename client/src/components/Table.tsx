import React from 'react';
import TableItem from './TableItem';
import '../styles/Table.css';
import HeaderTable from './HeaderTable';
import { NoteType } from '../types/notesTypes';
import { CategoryType } from '../types/categoryTypes';

interface TableProps {
  data: NoteType[] | CategoryType[],
  extraClasses: string,
  children: string,
  isCategory: boolean,
  setModalProperties: Function,
  loading: boolean,
}

const Table: React.FC<TableProps> = ({
    data,
    children,
    extraClasses,
    isCategory,
    setModalProperties,
    loading,
  }) => {

  const loader = () => {
    return (
      <div className='loader'>
        <h2>loading...</h2>
      </div>
    )
  }

  const returnRow = (item: NoteType | CategoryType) => {
    return (
      <TableItem extraClasses={extraClasses}
        item={item} setModalProperties={setModalProperties}/>
    )
  }

  const tableRows = () => {
    return (
      <div className='tableRows'>
        <HeaderTable isCategory={isCategory}/>

        {data.map(item => returnRow(item))}
      </div>
    )
  }

  return (
    <div className='notes'>
      <h2>{children}</h2>
      {loading? loader() : tableRows()}
    </div>
  )

}
  
  
export default Table;

