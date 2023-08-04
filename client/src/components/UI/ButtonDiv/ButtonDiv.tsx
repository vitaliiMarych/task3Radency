import React, { useEffect } from 'react';

import cl from './ButtonDiv.module.css';
import ActionLink from '../actionLink/ActionLink';
import editIcon from '../../../assets/icons/edit.png';
import archiveIcon from '../../../assets/icons/archive.png';
import unarchiveIcon from '../../../assets/icons/unarchive.png';
import deleteIcon from '../../../assets/icons/delete.png';
import { NotesActionsTypes } from '../../../types/notesTypes';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { modalTypes } from '../../../types/modalType';
import axios from 'axios';
import { useActions } from '../../../hooks/useActions';

interface ButtonDivProps {
  extraClasses : string,
  idNote: number,
  setModalProperties: Function
}

const ButtonDiv: React.FC<ButtonDivProps> = ({
  extraClasses,
  idNote,
  setModalProperties,
}) => {

  const [thisNote, setThisNote] = React.useState({
    id: -1,
    createdTime: "",
    content: "",
    category: "",
    archived: false,
  });
  
  useEffect(() => {
    axios.get('http://localhost:4444/notes/' + idNote).then((res) => {
      setThisNote(res.data);
    }).catch(err =>{
      alert('Error');
    })
  }, []);

  const dispatch = useDispatch();
  const {fetchNotesStats} = useActions()

  const deleteNote = async () => {
    await axios.delete('http://localhost:4444/notes/' + idNote);

    fetchNotesStats();
    // We could do reload all data with fetchNote() but it`s not good for user
    dispatch({
      type: NotesActionsTypes.DELETE_NOTE,
      payload: idNote
    })
  }

  const archiveNote = async () => {
    
    await axios.patch('http://localhost:4444/notes/archive/' + idNote);
    
    fetchNotesStats();
    // We could do reload all data with fetchNote() but it`s not good for user
    dispatch({
      type: NotesActionsTypes.ARCHIVE_OR_UNARCHIVE_NOTE,
      payload: idNote
    })

  }

  const isArchived = extraClasses.includes('archive');

  return (
    <div className={cl.buttonDiv}>
        <ActionLink imageUrl={editIcon} alt='edit' onClickFunct={() => {
          if (thisNote !== undefined){
            setModalProperties({
              visible: true,
              oldNoteContent: thisNote.content,
              oldNoteCategory: thisNote.category,
              modalType: modalTypes.EDIT,
              index: idNote,
            })
          }
        }}/>

        {
        isArchived ? 
          <ActionLink imageUrl={unarchiveIcon} alt='unarchive' onClickFunct={archiveNote}/> :
          <ActionLink imageUrl={archiveIcon} alt='archive' onClickFunct={archiveNote}/>  
        }

        <ActionLink imageUrl={deleteIcon} alt='delete' onClickFunct={() => deleteNote()}/>
    </div>
  );
}
  
  
export default ButtonDiv;

