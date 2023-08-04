import React, {FC, useState} from 'react';

import cl from './MyForm.module.css';
import MyButton from '../MyButton/MyButton';
import { modalPropetiesType, modalTypes } from '../../../types/modalType';
import { Category } from '../../../types/categoryTypes';
import { updateObject } from '../../../utils/otherUtils';
import axios from 'axios';
import { useActions } from '../../../hooks/useActions';
import { useInput } from '../../../hooks/useInput';

interface MyFormProps {
    modalProperties: modalPropetiesType,
    setModalProperties: Function,
}

const MyForm: FC<MyFormProps> = ({
    modalProperties,
    setModalProperties,
}) => {

  const setStandartModel = () => {
    setModalProperties({
      visible: false,
      oldNoteContent: '',
      oldNoteCategory: Category.TASK,
      modalType: modalTypes.ADD,
      index: -1,
    });
  }

  const {fetchNotes, fetchNotesStats} = useActions()

  let onClickFunction = async () => {
    if (!noteContent.isDirty) {
        console.log('fsefsef');
        return;
    }

    let data = JSON.stringify({
        "noteContent": modalProperties.oldNoteContent,
        "noteCategory": modalProperties.oldNoteCategory
    });

    const config = getConfig(data);

    await axios.request(config)

    fetchNotes();
    fetchNotesStats();

    setStandartModel();
  };

  const getConfig = (data:Object) => {
    let method = 'post';
    let url = 'http://localhost:4444/notes/';

    if (modalProperties.modalType === modalTypes.EDIT) {
      method = 'patch';
      url += modalProperties.index;
    }

    return {
      method: method,
      maxBodyLength: Infinity,
      url: url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  }

  const noteContent = useInput(modalProperties.oldNoteContent, {
    minLength: 3,
  });

  const notValidForm = noteContent.isDirty && noteContent.minLenghtError;

  return (
    <div className={cl.myForm}>
        <div className={cl.row}>
            <label htmlFor="noteContent">Note Content:</label>
            <textarea id="noteContent" rows={4} cols={50} 
                value={modalProperties.oldNoteContent} 
                onBlur={(e) => noteContent.onBlur(e)}
                onChange={e => 
                setModalProperties(updateObject(modalProperties, 'oldNoteContent', e.target.value))}
            ></textarea>
            {(notValidForm) && <div style={{color:'red'}}><b>Min lenght Note Nontent is 3 letters</b></div>}
        
        </div>

        <div className={cl.row}>
            <label htmlFor="noteCategory">Note Category:</label>
            <select id="noteCategory" value={modalProperties.oldNoteCategory} 
                onChange={e => {
                    setModalProperties(updateObject(modalProperties, 'oldNoteCategory', e.target.value))}}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
        </div>

        <div className={cl.row}>
            <MyButton isDisabled={notValidForm} onClickFunction={onClickFunction}>Save Note</MyButton>
        </div>
    </div>
  );
}

export default MyForm;