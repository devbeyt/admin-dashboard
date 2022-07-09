import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/components/dakMode/darkModeSlice";
import sidebarReducer from "../features/components/sidebar/sidebarSlice";

const store = configureStore({
    reducer:{
        links:sidebarReducer,
        theme:darkModeReducer,
    }
})

export default store