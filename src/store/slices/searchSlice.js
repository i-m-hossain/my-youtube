import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchResult: {},
};
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        cacheResults: (state, { payload }) => {
            state.searchResult = {...state.searchResult, ...payload};
        },
    },
});

// Action creators are generated for each case reducer function
export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
