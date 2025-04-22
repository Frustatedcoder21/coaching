import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchCourse=createAsyncThunk('fetchCourse',async()=>{
  const response=  await fetch('http://localhost:5000/courses')
  const data= await response.json();
  return data;
})
const initialState={
    is_error:false,
    course:null,
    is_loading:false
}
const courseSlice=createSlice({
    name:'course',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(fetchCourse.pending,(state)=>{
       state.is_loading=true;
    })
    builder.addCase(fetchCourse.fulfilled,(state,action)=>{
        state.is_error=false;
        state.is_loading=false;
        state.course=action.payload
    })
    builder.addCase(fetchCourse.rejected,(state)=>{
        state.is_error=true;
        state.is_loading=false;

    })
    }
})
export {fetchCourse}
export default courseSlice.reducer;
