import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        cacheResults: (state, { payload }) => {
            state = { ...payload, state };
        },
    },
});

// Action creators are generated for each case reducer function
export const { cacheSearch } = searchSlice.actions;

export default searchSlice.reducer;
