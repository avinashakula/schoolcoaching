import { configureStore } from "@reduxjs/toolkit";
import welcomeReducer from "./Registration";
export const store = configureStore({
    reducer:{
        welcome:welcomeReducer
    }
})