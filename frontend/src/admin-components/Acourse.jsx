import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchCourse} from '../store/slice/CourseSlice'

const Acourse = () => {
  const dispatch=useDispatch()
  const [name,setName]=useState("");
  const [desc,setDesc]=useState("")
  const {is_loading,is_error,course}=useSelector((state)=>state.course)
  console.log(course);
   const handleDelete=async(id)=>{
    await fetch(`http://localhost:5000/admin/course/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json',
        'token':localStorage.getItem('token')
      }
    })
    window.location.reload();
   }
   const handleSubmit=async(e)=>{
   e.preventDefault();
  const response= await fetch('http://localhost:5000/admin/course',{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
      'token':localStorage.getItem('token')
    },
    body:JSON.stringify({
      name,
      description:desc
    })
   })
   if(response.ok){
    window.location.reload();
   }
   }
  useEffect(()=>{
   dispatch(fetchCourse())
  },[])
  
  return (
    <div className='w-screen min-h-screen md:h-screen bg-[#CDF5FD] flex justify-center items-center'>
    <div className='w-full h-full flex flex-wrap p-10 gap-5'>
      <form action=""  className='flex flex-col  items-center gap-5 w-[90%] md:w-[30%] h-[400px] border-2 px-10 py-12 rounded-2xl' >
        <input type="text" placeholder=' write course name' value={name} onChange={(e)=>setName(e.target.value)} className='bg-white h-[40px] rounded-2xl pl-5' />
        {/* <input type="text" placeholder='write course description'/>
        <input type="text" placeholder='for whom is this course for' /> */}
        <textarea name="" placeholder='write course description' value={desc} onChange={(e)=>setDesc(e.target.value)} className='bg-white rounded-2xl pl-5 pt-3 w-[90%] max-w-[500px]' id=""></textarea>
        {/* <textarea name="" placeholder='for whom is this course for' className='bg-white rounded-2xl pl-5 pt-3 w-[90%]' id=""></textarea> */}
        <input type="submit" value="create course" onClick={(e)=>handleSubmit(e)}  className=' w-[120px] rounded-2xl py-1.5 px-2.5 border-2 bg-black text-white' />
      </form>
      <div className='w-[90%] md:w-[50%]  h-[400px] border-2 rounded-2xl overflow-y-auto '>
      {is_loading && <p>fetching all the data ...</p>}
      {is_error && <p className='text-red-600'>Something went wrong</p>}
      {course && <div className='px-2.5 py-2.5'>
        <p className='text-center'>All Courses</p>
       <div className=' flex flex-col gap-2.5'>
       {course.courses.map((c)=>{
           return <div key={c._id} className='border-2 rounded-2xl flex justify-between items-center   px-2.5'>
            <div> <p className='text-black'>Course name :- {c.name}</p>
            <p>Course Description :- {c.description}</p>
            </div>
            <div>
            <p className='text-red-500 hover:underline cursor-pointer' onClick={()=>{
              handleDelete(c._id)
            }}>delete</p>
            </div>
             
            
          </div>
          
        })}
       </div>
        </div>}
      </div>
    </div>
    </div>
  )
}

export default Acourse