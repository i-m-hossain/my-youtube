import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import searchReducer from "./slices/searchSlice";
import streamReducer from "./slices/streamSlice";
import chatReducer from "./slices/chatSlice";
import buttonListVideosReducer from "./slices/buttonListVideosSlice";
export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        search: searchReducer,
        stream: streamReducer,
        chat: chatReducer,
        buttonListVideos: buttonListVideosReducer,
    },
});
