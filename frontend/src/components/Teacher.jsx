// import { useGSAP } from '@gsap/react'
import React from 'react'
// import gsap from 'gsap'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTeacher } from '../store/slice/TeacherSlice'

const Teacher = () => {
  const dispatch=useDispatch()
    // useGSAP(()=>{
    //  const tl=gsap.timeline();
    //   tl.from('.teacher',{
    //   opacity:0,
    //   duration:2,
    //   stagger:0.8
    //   })
    // },[])
    const {is_loading,is_error,teacher}=useSelector((state)=>state.teacher)
    useEffect(()=>{
      dispatch(fetchTeacher())
     },[])

  return (
    <div className='w-full h-full p-4 relative font-primary'>
        <div className='h-full w-full absolute top-0 left-0 z-10 bg-[url("abstract-3.jpg")] bg-right md:bg-center bg-cover opacity-10'></div>
      <div className='h-full w-full absolute top-0 left-0 z-20 pl-2.5 pt-2.5'>
      <p className='text-3xl font-bold mb-3'>Our Faculty members</p>
      {is_loading && <p className='text-green-400'>fetchig ...</p>}
      {is_error && <p className='text-red-500'>Error while loading</p>}
       {teacher &&  <div className='cont flex items-center justify-center  gap-5'>
        {teacher.teachers.map((t)=>{

          return <div className='teacher  w-[200px] h-[300px] flex flex-col gap-3 items-center justify-center rounded-2xl bg-[#CDF5FD] hover:scale-105 hover:shadow-xl shadow-blue-500 duration-200'>
          <img src={t.image} className='w-[150px] h-[150px] bg-amber-50 rounded-2xl ' alt="" />
          <p className='text-center text-xl font-bold'>{t.fullname}</p>
          
      </div>
        })}
        
        </div>}
      </div>
    </div>
  )
}

export default Teacher