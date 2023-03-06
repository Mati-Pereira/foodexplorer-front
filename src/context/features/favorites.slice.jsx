import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    cleanFavorites: (state) => {
      state.favorites = [];
    },
    getFromDatabases: (state, action) => {
      if (!state.favorites.length) {
        state.favorites.splice(0, state.favorites.length);
        state.favorites.push(...action.payload);
      }
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  cleanFavorites,
  getFromDatabases,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
