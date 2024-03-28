import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const uid = { uid: uuidv4() };
      const item = { ...action.payload, ...uid };
      state.item.push(item);
    },
    removeFromCart: (state, action) => {
      const index = state.item.findIndex(
        (i) => i.uid === action.payload
      );
      state.item.splice(index,1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
