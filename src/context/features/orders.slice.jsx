import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addToOrder: (state, action) => {
      if (!state.orders.some((order) => order.id === action.payload.id)) {
        toast.success("Produto adicionado ao pedido!");
        state.orders.push(action.payload);
      }
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload.id
      );
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const { addToOrder, removeOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
