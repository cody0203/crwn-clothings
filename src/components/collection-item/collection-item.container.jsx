import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

import CollectionItem from './collection-item.component';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItemContainer = connect(
  null,
  mapDispatchToProps
)(CollectionItem);

export default CollectionItemContainer;
