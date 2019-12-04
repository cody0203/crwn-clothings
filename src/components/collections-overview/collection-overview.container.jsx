import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from './collections-overview.component';
import WithSpinner from '../hocs/with-spinner/with-spinner.component';

import { selectIsFetchingCollections } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingCollections
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
