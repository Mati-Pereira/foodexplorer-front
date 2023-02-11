import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth.thunk";
import sessionStorage from "redux-persist/es/storage/session";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  storage: sessionStorage,
  key: "auth",
  whitelist: ["auth"],
};

const reducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});
