import { createSlice } from "@reduxjs/toolkit";

export const RegistrationSlice = createSlice({
    name:"welcome",
    initialState: {
        email:"",
        password:"",
        name:"",
        mobile:"",
        school:"",
        grade:""
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