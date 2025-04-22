import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTeacher} from '../store/slice/TeacherSlice'

const Ateachers = () => {
  const dispatch=useDispatch()
  const [image,setImage]=useState("");
  const [name,setName]=useState("")
  const {is_loading,is_error,teacher}=useSelector((state)=>state.teacher)
  console.log(teacher);
   const handleDelete=async(id)=>{
    console.log('delete id',id);
    
    await fetch(`http://localhost:5000/admin/teacher/${id}`,{
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
  const response= await fetch('http://localhost:5000/admin/teacher',{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
      'token':localStorage.getItem('token')
    },
    body:JSON.stringify({
      image,
      fullname:name
    })
   })
   if(response.ok){
    window.location.reload();
   }
   }
  useEffect(()=>{
   dispatch(fetchTeacher())
  },[])
  
  return (
    <div className='w-screen min-h-screen md:h-screen bg-[#CDF5FD] flex justify-center items-center'>
    <div className='w-full h-full flex flex-wrap p-10 gap-5'>
      <form action=""  className='flex flex-col  items-center gap-5 w-[90%] md:w-[30%] h-[400px] border-2 px-10 py-12 rounded-2xl' >
        <input type="text" placeholder='paste image line' value={image} onChange={(e)=>setImage(e.target.value)} className='bg-white h-[40px] rounded-2xl pl-5' />
       
        <input placeholder='write teacher name' value={name} onChange={(e)=>setName(e.target.value)} className='bg-white rounded-2xl pl-5 pt-3 w-[90%] max-w-[500px]' id=""/>
        <input type="submit" value="Add teacher" onClick={(e)=>handleSubmit(e)}  className=' w-[120px] rounded-2xl py-1.5 px-2.5 border-2 bg-black text-white' />
        <p className='text-red-600'>use https://postimages.org/ for generating image link</p>
      </form>
      <div className='w-[90%] md:w-[50%]  h-[400px] border-2 rounded-2xl overflow-y-auto '>
      {is_loading && <p>fetching all the data ...</p>}
      {is_error && <p className='text-red-600'>Something went wrong</p>}
      {teacher && <div className='px-2.5 py-2.5'>
        <p className='text-center'>All Teachers</p>
       <div className=' flex  gap-2.5'>
       {teacher.teachers.map((t)=>{
           return <div key={t._id} className='border-2 rounded-2xl  p-2'>
            <div> 
                <img src={t.image} className='w-[100px] h-[150px]' alt="" />
            <p className='text-center'> {t.fullname}</p>
            </div>
            <div>
            <p className='text-red-500 hover:underline cursor-pointer text-center' onClick={()=>{
              handleDelete(t._id)
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

export default Ateachers