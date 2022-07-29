import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const navSlice = createSlice({
  name: "navMenuToggle",
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpen = true;
    },

    closeMenu(state) {
      state.isOpen = false;
    },

    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

// -- To dispatch actions in components  ->  to change store state
export const navActions = navSlice.actions;

export default navSlice;
