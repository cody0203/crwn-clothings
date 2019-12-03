import { cartTypes } from './cart.types';
import { cartUtils } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: cartUtils.addItemToCart(state.cartItems, action.payload)
      };
    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: cartUtils.removeItemFromCart(state.cartItems, action.payload)
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: cartUtils.removeItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
