import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./slices/Registration";
export const store = configureStore({
    reducer:{
        register:registerReducer
    }
})