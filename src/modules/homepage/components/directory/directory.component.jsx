import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.style';

const Directory = ({ sections }) => {
  return (
    <DirectoryContainer>
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
