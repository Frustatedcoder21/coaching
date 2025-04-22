import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchAnnouncement=createAsyncThunk('fetchAnnouncement',async()=>{
  const response=  await fetch('http://localhost:5000/announcements')
  const data= await response.json();
  return data;
})
const initialState={
    is_error:false,
    announcement:null,
    is_loading:false
}
const announcementSlice=createSlice({
    name:'announcement',
    initialState,
    extraReducers:(builder)=>{
    builder.addCase(fetchAnnouncement.pending,(state)=>{
       state.is_loading=true;
    })
    builder.addCase(fetchAnnouncement.fulfilled,(state,action)=>{
        state.is_error=false;
        state.is_loading=false;
        state.announcement=action.payload
    })
    builder.addCase(fetchAnnouncement.rejected,(state)=>{
        state.is_error=true;
        state.is_loading=false;

    })
    }
})
export {fetchAnnouncement} ;
export default announcementSlice.reducer;
