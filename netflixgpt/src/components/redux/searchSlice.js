import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showGPTSearch: false,
    movieResult: null,
    movieNames: null,
  },

  reducers: {
    enableSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { movieNames, movieResult } = action.payload;
      state.movieNames = movieNames;
      state.movieResult = movieResult;
    },
  },
});

export default searchSlice.reducer;
export const { enableSearch, addGPTMovieResult } = searchSlice.actions;
