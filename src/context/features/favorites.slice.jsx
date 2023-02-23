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
      state.favorites.splice(state.favorites.indexOf(action.payload), 1);
    },
    cleanFavorites: (state) => {
      state.favorites = [];
    },
    getFromDatabases: (state, action) => {
      state.favorites.splice(0, state.favorites.length);
      state.favorites.push(...action.payload);
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
