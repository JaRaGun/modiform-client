// cartSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  urlPicture: string;
  itemName: string;
  itemPrice: number;
  itemSize: string;
  itemCategory: string;
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
      state.items.push(action.payload);
    },
    removeFromCartRedux: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCartRedux: (state) => {
      state.items = [];
    },
  },
});

export const { addToCartRedux, removeFromCartRedux, clearCartRedux } =
  cartSlice.actions;

export default cartSlice.reducer;
