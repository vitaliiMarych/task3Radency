import React, {FC} from 'react';

import cl from './ActionLink.module.css';

interface ActionLinkProps {
  imageUrl: string;
  alt: string;
  onClickFunct: any,
}

const ActionLink: FC<ActionLinkProps> = ({
  imageUrl,
  alt,
  onClickFunct
}) => {

  return (
    <a className={cl.tableLink} onClick={onClickFunct}>
      <img className = {cl.tableLinkIcon} src={imageUrl} alt={alt}/>
    </a>
  );
}


export default ActionLink;