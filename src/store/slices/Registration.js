import { createSlice } from "@reduxjs/toolkit";

export const RegistrationSlice = createSlice({
    name:"register",
    initialState: {
        users:[],
        loading:false
    },
    reducers:{
        setCount(state, action){
            state.count = action.payload;
        },
        newUser(state, action){
            let existingUsers = [...state.users];
            existingUsers.push(action.payload);
            state.users = existingUsers;
            state.loading = false;
        },
        removeUser(state, action){
            let existingUsers = [...state.users];
            let updatedUsers = existingUsers.filter((eUser, id)=>{
                return action.payload != id
            });
            state.users = updatedUsers;
            state.loading = false; 
        },
        updating(state){
            state.loading = true;
        },
        
    }
})

export const {setCount, newUser, removeUser, updating} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;