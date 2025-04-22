import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchCourse} from '../store/slice/CourseSlice'
const Courses = () => {

  const dispatch=useDispatch()
    const {is_loading,is_error,course}=useSelector((state)=>state.course)
   useEffect(()=>{
     dispatch(fetchCourse())
    },[])
  return (
    <div className='course w-full h-full p-10 font-primary '>
    <p  className='text-3xl font-bold mb-3'>Our Courses</p>   
    <div className='w-full  flex justify-center items-center gap-5' >
      {is_loading && <p className='text-green-400'>fetching details</p>}
      {is_error && <p className='text-red-500'>Error while fetching</p>}
      {course ? course.courses.map((c)=>{
       return <div className='w-[250px] h-[300px] border-2 border-black rounded-2xl'>
        <div className='w-full h-[20%] rounded-t-2xl bg-[#00A9FF]'>
         <p className='text-center pt-2.5'>{c.name}</p>
        </div>
        <div className='w-full h-[80%] bg-white rounded-2xl'>
         <p className='text-center pt-3.5'>{c.description}</p>
        </div>
        </div>
      }):<div>nothing to fetch</div>}
    </div>
    </div>
  )
}

export default Courses