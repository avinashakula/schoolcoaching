import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const newUserAsync = createAsyncThunk('register/newUserAsync', async (user) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    try{
        const response = await fetch("http://desireitservices.in/schoolcoaching/server/newStudent.php", config);
        if( !response.ok ){
            throw new Error('Failed to update user');
        }
        const data = await response.json();       
        return data;
    }catch(error){
        throw error;
    }
});



export const RegistrationSlice = createSlice({
    name:"register",
    initialState: {
        users:[],
        loading:false,
        msg:""
    },
    reducers:{
        setCount(state, action){
            state.count = action.payload;
        },
        newUser(state, action){
            state.loading = true;
            let existingUsers = [...state.users];
            existingUsers.push(action.payload);
            state.users = existingUsers;
            state.loading = false;
        },
        removeUser(state, action){
            let existingUsers = [...state.users];
            let updatedUsers = existingUsers.filter((eUser, id)=>{
                return action.payload !== id
            });
            state.users = updatedUsers;
            state.loading = false; 
        },
        updating(state){
            state.loading = true;
        },
        
    },
    extraReducers: (builder) => {
        // Handle the fulfilled (success) state for the async thunk
        builder.addCase(newUserAsync.fulfilled, (state, action) => {           
            state.loading = false;
            state.msg = action.payload.msg
        });

        // Handle the rejected (error) state for the async thunk
        builder.addCase(newUserAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.msg = action.payload.msg
        });
    },
})

export const {setCount, newUser, removeUser, updating} = RegistrationSlice.actions;
export default RegistrationSlice.reducer;