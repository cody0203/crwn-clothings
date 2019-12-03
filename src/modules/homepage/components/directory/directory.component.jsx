import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import { selectSections } from '../../../../redux/directory/directory.selector';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
