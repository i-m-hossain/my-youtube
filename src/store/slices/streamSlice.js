import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStreaming: localStorage.getItem('stream') ? JSON.parse(localStorage.getItem('stream')): false,
};

export const streamSlice = createSlice({
    name: "streamSlice",
    initialState,
    reducers: {
        stopStreaming: (state) => {
            localStorage.setItem("stream", "false")
            state.isStreaming = false;

        },
        startStreaming: (state) => {
            localStorage.setItem("stream", "true")
            state.isStreaming = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { stopStreaming, startStreaming } = streamSlice.actions;

export default streamSlice.reducer;
