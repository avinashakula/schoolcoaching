import { createSlice } from "@reduxjs/toolkit";

export const RegistrationSlice = createSlice({
    name:"register",
    initialState: {
        users:[]
    },
    reducers:{
        setCount(state, action){
            state.count = action.payload;
        },
        newUser(state, action){
            let existingUsers = [...state.users];
            existingUsers.push(action.payload);
            state.users = existingUsers;
        },
        removeUser(state, action){
            let existingUsers = [...state.users];
            let updatedUsers = existingUsers.filter((eUser, id)=>{
                return action.payload != id
            });
            state.users = updatedUsers;
        }
    }
})

export const {setCount, newUser, removeUser} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;