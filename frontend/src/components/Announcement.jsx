import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAnnouncement} from '../store/slice/announcementSlice'
const Announcement = () => {
  const dispatch=useDispatch()
  const {is_loading,is_error,announcement}=useSelector((state)=>state.announcement)
  useEffect(()=>{
   dispatch(fetchAnnouncement())
  },[])
  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center gap-10 p-10 font-primary'>
     <div className='w-[350px] h-[400px] border-2 border-black overflow-auto bg-white rounded-2xl'>
        <p className=' text-center bg-[#00A9FF] text-xl py-2.5'>Announcements and updates</p>
     <ol className='flex flex-col items-center list-disc'>
      {is_loading && <p className='text-green-400'>fetching data</p>}
      {is_error && <p>error while fetching</p>}
      {announcement ? announcement.announcements.map((a)=>{
         return <li className='text-xl text-center'>{a.text}</li>
      }):<div>No Announcement</div>}
     </ol>
     </div>
     <div className='w-[350px] h-[400px] border-2 border-black overflow-auto bg-white rounded-2xl'>
     <p className=' text-center bg-[#00A9FF] text-xl py-2.5'>Downloads</p>
      <ul>
       
      </ul>
     </div>
    </div>
  )
}

export default Announcement