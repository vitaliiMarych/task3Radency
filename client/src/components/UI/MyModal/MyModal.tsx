import React, {FC} from 'react';

import cl from './MyModal.module.css';
import { modalPropetiesType } from '../../../types/modalType';
import MyForm from '../MyForm/MyForm';
import { updateObject } from '../../../utils/otherUtils';

interface MyModalProps {
    modalProperties: modalPropetiesType;
    setModalProperties: Function;
}

const MyModal: FC<MyModalProps> = ({
    modalProperties,
    setModalProperties,
}) => {

    const rootClasses = [cl.myModal];

    if (modalProperties.visible) {
        rootClasses.push(cl.active);
    }

  return (
    <div className={rootClasses.join(' ')} 
                    onClick={() => setModalProperties(updateObject(modalProperties, 'visible', false))}>
        <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
            <MyForm modalProperties={modalProperties} setModalProperties={setModalProperties}/>
        </div>
    </div>

  );
}


export default MyModal;