import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectSections } from '../../../../redux/directory/directory.selector';

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

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
