import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_SEARCH_RESULT } from "../../config";
const initialState = {
    searchResult: {},
};
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        cacheResults: (state, { payload }) => {
            state.searchResult = { ...state.searchResult, ...payload };
            // deleting search result more than OFFSET_SEARCH_RESULT(currently 50 items is allowed)
            if (Object.keys(state.searchResult).length > OFFSET_SEARCH_RESULT) {
                delete state.searchResult[Object.keys(state.searchResult)[0]];
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
