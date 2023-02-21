import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import searchReducer from "./slices//searchSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        search:searchReducer
    },
});
