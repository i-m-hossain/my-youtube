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
        closeMenu:(state)=>{
            state.isMenuActive = false
        }, 
        showMenu:(state)=>{
            state.isMenuActive= true
        }
    },
});

// Action creators are generated for each case reducer function
export const { toggleActive, closeMenu,showMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
