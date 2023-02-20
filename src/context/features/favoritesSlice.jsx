import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
      state.map((item) => {
        item.favorite = true;
      });
    },
    removeFromFavorites: (state, action) => {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
