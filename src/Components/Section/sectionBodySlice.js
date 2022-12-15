import { createSlice } from "@reduxjs/toolkit";
import { resetTextAnimation } from "../../functions/terminalOutputter";
import { activateLink } from "../Navbar/Navbar";

const sectionSlice = createSlice({
    name: 'section',
    initialState: {
        section: "",
        bodyText: "",
    },
    reducers: {
        setSection: (state, action) => {
            state.section = action.payload;
            state.animate = false;
            resetTextAnimation();
            activateLink();
        },
        setBodyText: (state, action) => {
            state.bodyText = action.payload;
        },
    },
})

export const { setSection, setBodyText} = sectionSlice.actions;

export const selectSection = (state) => state.section.section;
export const selectBodyText = (state) => state.section.bodyText;

export default sectionSlice.reducer;
