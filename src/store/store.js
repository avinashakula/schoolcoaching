import { configureStore } from "@reduxjs/toolkit";
import welcomeReducer from "./slices/Registration";
export const store = configureStore({
    reducer:{
        welcome:welcomeReducer
    }
})