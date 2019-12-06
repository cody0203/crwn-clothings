import { createSelector } from 'reselect';

// This is input.
const selectCart = state => state.cart;

// And this is output for cartItems property in state cart
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0)
);
