import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addTocart: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromcart: (state, action) => {
      state.cartItem.pop(action.payload);
    },
    clearCartItem: (state) => {
      state.cartItem.length = 0;
    },
  },
});

export const { addTocart, removeFromcart, clearCartItem } =
  counterSlice.actions;
export default counterSlice.reducer;
