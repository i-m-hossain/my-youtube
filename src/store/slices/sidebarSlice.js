import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuActive: true,
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleActive: (state) => {
            state.isMenuActive = !state.isMenuActive;
        },
    },
});

// Action creators are generated for each case reducer function
export const { toggleActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;
