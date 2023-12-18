// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  itemCode: string;
  urlPicture: string;
  itemName: string;
  itemPrice: number;
  itemSize: string;
  itemCategory: string;
  quantity: number;
  totalPrice: number; // Add a totalPrice field
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartRedux: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // If the item is already in the cart, increment the quantity
        state.items[itemIndex].quantity += 1;
        // Update totalPrice
        state.items[itemIndex].totalPrice += action.payload.itemPrice;
      } else {
        // If the item is not in the cart, add it with a quantity of 1 and initial totalPrice
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.itemPrice,
        });
      }
    },
    removeFromCartRedux: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItemInCartRedux: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Update the quantity of the item
        state.items[itemIndex].quantity = action.payload.quantity;
        // Update totalPrice
        state.items[itemIndex].totalPrice =
          state.items[itemIndex].itemPrice * action.payload.quantity;
      }
    },
    clearCartRedux: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCartRedux,
  removeFromCartRedux,
  clearCartRedux,
  updateItemInCartRedux,
} = cartSlice.actions;
export default cartSlice.reducer;
