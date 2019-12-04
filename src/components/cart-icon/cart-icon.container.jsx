import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from './cart-icon.component';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { toggleCart } from '../../redux/cart/cart.action';

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const CartIconContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  CartIcon
);

export default CartIconContainer;
