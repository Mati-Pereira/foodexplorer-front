import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites.splice(state.favorites.indexOf(action.payload), 1);
    },
  },
});

export const { addToFavoritesm, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
