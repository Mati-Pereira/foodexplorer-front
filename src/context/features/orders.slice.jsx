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
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    clearOrders: (state) => {
      state.orders.splice(0, state.orders.length);
    },
  },
});

export const { addToOrder, removeOrders, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
