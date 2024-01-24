import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
    popularMovies:null
  },

  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addMovie, addTrailerVideos, addPopular } = moviesSlice.actions;
export default moviesSlice.reducer;
