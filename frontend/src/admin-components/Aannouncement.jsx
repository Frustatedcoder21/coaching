import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAnnouncement} from '../store/slice/announcementSlice'

const Aannouncements = () => {
  const dispatch=useDispatch()
  const [text,setText]=useState("")
  const {is_loading,is_error,announcement}=useSelector((state)=>state.announcement)
  console.log(announcement);
   const handleDelete=async(id)=>{
    console.log('delete id',id);
    
    await fetch(`http://localhost:5000/admin/announcement/${id}`,{
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
  const response= await fetch('http://localhost:5000/admin/announcement',{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
      'token':localStorage.getItem('token')
    },
    body:JSON.stringify({
     text
    })
   })
   if(response.ok){
    window.location.reload();
   }
   }
  useEffect(()=>{
   dispatch(fetchAnnouncement())
  },[])
  
  return (
    <div className='w-screen min-h-screen md:h-screen bg-[#CDF5FD] flex justify-center items-center'>
    <div className='w-full h-full flex flex-wrap p-10 gap-5'>
      <form action=""  className='flex flex-col  items-center gap-5 w-[90%] md:w-[30%] h-[400px] border-2 px-10 py-12 rounded-2xl' >       
        <input placeholder='write announcement ' value={text} onChange={(e)=>setText(e.target.value)} className='bg-white rounded-2xl pl-5 pt-3 w-[90%] max-w-[500px]' id=""/>
        <input type="submit" value="Add announcement" onClick={(e)=>handleSubmit(e)}  className=' w-[200px] rounded-2xl py-1.5 px-2.5 border-2 bg-black text-white' />
      </form>
      <div className='w-[90%] md:w-[50%]  h-[400px] border-2 rounded-2xl overflow-y-auto '>
      {is_loading && <p>fetching all the data ...</p>}
      {is_error && <p className='text-red-600'>Something went wrong</p>}
      {announcement && <div className='px-2.5 py-2.5'>
        <p className='text-center'>All announcements</p>
       <div className=' flex  gap-2.5'>
       {announcement.announcements.map((t)=>{
           return <div key={t._id} className='border-2 rounded-2xl  p-2'>
            <div> 
            <p className='text-center'> {t.text}</p>
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

export default Aannouncements