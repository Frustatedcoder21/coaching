import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:localStorage.getItem('token'),
    isloggedIn:!!localStorage.getItem('token')
}
const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{
        login:(state)=>{
        state.isloggedIn=true
        },
        logout:(state)=>{
        state.token=null;
        state.isloggedIn=false
        localStorage.removeItem('token')
        }
    }
})
export const {login,logout} = authenticationSlice.actions
export default  authenticationSlice.reducer