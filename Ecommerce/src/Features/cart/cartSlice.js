import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exisitingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exisitingItem) {
        exisitingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // remove card
    removeFromCarr: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    minusQuantity: (state, action) => {
    
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCarr, updateQuantity, minusQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
