import React, {FC} from 'react';

import cl from './MyButton.module.css';

interface MyButtonProps {
    children: any,
    onClickFunction: any
    isDisabled: boolean
}

const MyButton: FC<MyButtonProps> = ({
    children,
    onClickFunction,
    isDisabled
}) => {

  return (
    <button className={cl.myButton} disabled={isDisabled} onClick={onClickFunction}>{children}</button>
  );
}


export default MyButton;