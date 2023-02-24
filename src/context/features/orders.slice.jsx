import { createSlice } from "@reduxjs/toolkit";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addToOrder: (state, action) => {
      state.orders = action.payload;
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { addToOrder, removeOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
