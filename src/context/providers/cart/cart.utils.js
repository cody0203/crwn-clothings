export const cartUtils = {
  addItemToCart: (cartItems, cartItemToAdd) => {
    // use find() method to find if current item adding to cart is existing in cartItems state
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );

    // If it's existing
    if (existingCartItem) {
      // use map() method to return new array of cartItems
      return cartItems.map(cartItem =>
        // Find each item in cartItems
        // if item have id === current item adding to cart id
        // so return this item with quantity + 1
        // else return all item
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    // if it isn't existing, so set this item quantity to 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  },

  removeItemFromCart: (cartItems, itemIdToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemIdToRemove);
  },

  removeItem: (cartItems, cartItemToRemove) => {
    return cartItems.map(cartItem => {
      if (cartItemToRemove.quantity === 1) return cartItem;

      return cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  },

  totalItemsCount: cartItems =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
};
