import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from './directory.component';

import { selectSections } from '../../../../redux/directory/directory.selector';

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

const DirectoryContainer = connect(mapStateToProps)(Directory);

export default DirectoryContainer;
