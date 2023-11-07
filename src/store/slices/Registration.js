import { createSlice } from "@reduxjs/toolkit";

export const RegistrationSlice = createSlice({
    name:"welcome",
    initialState: {
        count: 10
    },
    reducers:{
        setCount(state, action){
            console.log("action payload", action.payload);
            state.count = action.payload;
        }
    }
})

export const {setCount} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;