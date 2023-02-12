import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth.thunk";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
