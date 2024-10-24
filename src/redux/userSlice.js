import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({

    name:'user',
    initialState:null,
    reducers:{

        //first reducer
        addUser:(state,action)=>{

            return action.payload;
        },

        //second reducer
        removeUser:(state,action)=>{
           return null
        }
    }
})
export const  {addUser,removeUser}=userSlice.actions
export default userSlice.reducer;