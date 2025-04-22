import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from '../store/slice/authenticationSlice'
import courseReducer from '../store/slice/CourseSlice'
import teacherReducer from '../store/slice/TeacherSlice'
import announcementReducer from '../store/slice/AnnouncementSlice'
const store=configureStore({
    reducer:{
        authentication:authenticationReducer,
        course:courseReducer,
        teacher:teacherReducer,
        announcement:announcementReducer
    }})
    
export default store