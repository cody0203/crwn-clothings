import React, { createContext, useState, useEffect } from 'react';

import { cartUtils } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  removeItemFromCart: () => {},
  cartItemsCount: 0,
  total: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItem = item =>
    setCartItems(cartUtils.addItemToCart(cartItems, item));
  const removeItem = item =>
    setCartItems(cartUtils.removeItem(cartItems, item));
  const removeItemFromCart = item =>
    setCartItems(cartUtils.removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    console.log('change cart items');
    setCartItemsCount(cartUtils.getItemsCount(cartItems));
    setTotal(cartUtils.getTotalCount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        cartItemsCount,
        addItem,
        removeItem,
        removeItemFromCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
