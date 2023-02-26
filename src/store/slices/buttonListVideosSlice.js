import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    buttonListVideos: {},
};
const buttonListVideosSlice = createSlice({
    name: "buttonListVideosSlice",
    initialState,
    reducers: {
        addButtonListVideos: (state, { payload }) => {
            state.buttonListVideos = payload;
        },
    },
});

export const { addButtonListVideos } = buttonListVideosSlice.actions;
export default buttonListVideosSlice.reducer;
