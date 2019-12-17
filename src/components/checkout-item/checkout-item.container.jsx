import { connect } from 'react-redux';
import {
  removeItemFromCart,
  removeItem,
  addItem
} from '../../redux/cart/cart.action';

import CheckoutItem from './checkout-item.component';

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
  };
};

const CheckoutItemContainer = connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItemContainer;
