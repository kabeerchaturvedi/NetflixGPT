import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },

  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { addMovie } = moviesSlice.actions;
