import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showGPTSearch: false,
  },

  reducers: {
    enableSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export default searchSlice.reducer;
export const { enableSearch } = searchSlice.actions;
