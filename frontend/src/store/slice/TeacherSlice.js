import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchTeacher=createAsyncThunk('fetchTeacher',async()=>{
  const response=  await fetch('http://localhost:5000/teachers')
  const data= await response.json();
  return data;
})
const initialState={
    is_error:false,
    teacher:null,
    is_loading:false
}
const teacherSlice=createSlice({
    name:'teacher',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(fetchTeacher.pending,(state)=>{
       state.is_loading=true;
    })
    builder.addCase(fetchTeacher.fulfilled,(state,action)=>{
        state.is_error=false;
        state.is_loading=false;
        state.teacher=action.payload
    })
    builder.addCase(fetchTeacher.rejected,(state)=>{
        state.is_error=true;
        state.is_loading=false;

    })
    }
})
export {fetchTeacher}
export default teacherSlice.reducer;
