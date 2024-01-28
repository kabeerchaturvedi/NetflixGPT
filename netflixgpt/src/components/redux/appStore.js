import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import searchReducer from "./searchSlice.js";
import configReducer from "./ConfigSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: searchReducer,
    config: configReducer,
  },
});

export default appStore;
