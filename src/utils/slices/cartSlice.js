import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      //mutating /modifying the state
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.card.info.id !== itemId);
    },
    clearcart: (state, action) => {
      state.items.length = 0;
      // return {items:[]};
    },
  },
});

export default cartSlice.reducer;
export const { additem, removeitem, clearcart } = cartSlice.actions;
