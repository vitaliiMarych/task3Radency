import React, { useEffect } from 'react';
import './styles/App.css';
import Table from './components/Table';
import MyButton from './components/UI/MyButton/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { modalTypes } from './types/modalType';
import { getActiveNotes, getArchiveNotes } from './services/noteService';
import { useTypedSelector } from './hooks/useTypeSelector';
import { Category, CategoryType } from './types/categoryTypes';
import { useActions } from './hooks/useActions';
import { NoteType } from './types/notesTypes';



function App() {
  const {notes, loadingNotes} = useTypedSelector(state => state.note);
  const {notesStats, loadingNotesStats} = useTypedSelector(state => state.notesStats)

  const activeNotes = getActiveNotes(notes);
  const archivedNotes = getArchiveNotes(notes);

  const {fetchNotes, fetchNotesStats} = useActions();

  useEffect(() => {
    fetchNotes();
    fetchNotesStats();

  }, [])


  const [modalProperties, setModalProperties] = React.useState({
    visible: false,
    modalType: modalTypes.ADD,

    index: -1,
    oldNoteContent: '',
    oldNoteCategory: Category.TASK,
  })

  const createTable = (data: CategoryType[] | NoteType[], extraClasses:string,
                       isCategory: boolean, setModalProperties : Function, 
                       loading : boolean, children: string) => {
    return (
      <Table data={data} 
      extraClasses={extraClasses} 
      isCategory = {isCategory} 
      setModalProperties={setModalProperties} 
      loading={loading}>{children}</Table>
    )
  }


  return (
    <div className="App">


      <MyModal modalProperties={modalProperties} setModalProperties={setModalProperties}/>

      {createTable(activeNotes, 'active', false, setModalProperties, loadingNotes, 'Active list')}
      
      <div className='buttonWrapper'>
        <MyButton isDisabled = {false} onClickFunction={() => {
          setModalProperties({
            visible: true,
            modalType: modalTypes.ADD,
            index: -1,
            oldNoteContent: '',
            oldNoteCategory: Category.TASK,
          })
        }}>Add note</MyButton>
      </div>
      
      {createTable(archivedNotes, 'archived', false, setModalProperties, loadingNotes, 'Archived list')}

      {createTable(notesStats, 'summary', true, setModalProperties, loadingNotesStats, 'Summary info')}
    </div>
  );
}

export default App;
