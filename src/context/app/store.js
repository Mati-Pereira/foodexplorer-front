import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import authReducer from "../features/auth.thunk";
import favoriteReducer from "../features/favorites.slice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = combineReducers({
  auth: authReducer,
  favorite: favoriteReducer,
});

const persisted = persistReducer(persistConfig, persistedReducer);

export const store = configureStore({
  reducer: {
    persisted,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
