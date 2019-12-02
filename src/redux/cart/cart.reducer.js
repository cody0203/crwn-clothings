import { cartTypes } from './cart.types';

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;
