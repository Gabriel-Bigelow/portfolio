import { configureStore } from "@reduxjs/toolkit";

import sectionReducer from "./Components/Section/sectionBodySlice";


export const store = configureStore ({
    reducer: {
        section: sectionReducer
    }
})