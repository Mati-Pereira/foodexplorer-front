import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addToOrder: (state, action) => {
      if (!state.orders.some((order) => order.id === action.payload.id)) {
        state.orders.push(action.payload);
      }
    },
    removeOrder: (state, action) => {
      state.orders.splice(state.orders.indexOf(action.payload), 1);
    },
    clearOrders: (state) => {
      state.orders.splice(0, state.orders.length);
    },
  },
});

export const { addToOrder, removeOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
