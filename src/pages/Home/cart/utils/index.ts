// Function to get cart items from local storage
const getCartItems = () => {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

// Function to update cart items in local storage
const updateCartItems = (items: any) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

// Function to add an item to the cart
const addToCart = (item: any) => {
  const cartItems = getCartItems();
  const updatedCart = [...cartItems, item];
  updateCartItems(updatedCart);
};

export { addToCart, updateCartItems, getCartItems };
