import React, { useContext } from 'react';

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

import DirectoryContext from '../../../../context/directory/directory.context';

const Directory = () => {
  const { sections } = useContext(DirectoryContext);
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
