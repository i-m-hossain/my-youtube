import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../../config";
const initialState = {
    chats: [],
};
const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
        addChat: (state, { payload }) => {
            state.chats.splice(OFFSET_LIVE_CHAT, 1);
            state.chats = [payload, ...state.chats];
        },
    },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
