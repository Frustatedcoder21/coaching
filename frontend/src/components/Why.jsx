import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Why = () => {
useGSAP(()=>{
gsap.from('.why',{
  x:-500,
  y:-500,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:'.why',
    // markers:true,
    start:'top 10%'


  }
  
})
},[])
  return (
    <div className='w-full h-full p-10 relative font-primary '>
  {/* <div className='w-full h-full absolute top-0 left-0 z-10 bg-[url("abstract-1.jpg")] bg-cover bg-center opacity-10'></div> */}
    <h1 className='text-3xl font-bold ml-4 mb-6 text-[#3674B5]'>Why Dopamine Classes ?</h1>
     <div className='w-full  flex flex-wrap gap-10 justify-center  items-center px-[20px]'>
        <div className='why w-[400px] h-[300px] bg-[#A1E3F9] shadow-xl shadow-[#00A9FF]  py-5 px-2.5 flex justify-center items-center rounded-2xl  '>
        <div className='w-full   flex flex-col items-center '>
            <div className='border-2 border-black w-[150px] text-center py-2 rounded-2xl bg-[#3674B5] text-black opacity-90 '>Small Batches</div>
            <p className='break-words text-center font-semibold '>At Dopamine Classes, we maintain small batch sizes to ensure that every student receives equal and undivided attention.</p>
        </div>
        <div><img src="batch.svg" className='w-[200px]' alt="" /></div>
        </div>

        <div className='why w-[400px] h-[300px] bg-[#A1E3F9] shadow-xl shadow-[#00A9FF]  py-5 px-2.5 flex justify-center items-center rounded-2xl  '>
        <div className='w-full   flex flex-col items-center '>
            <div className='border-2 border-black w-[150px] text-center py-2 rounded-2xl bg-[#3674B5] text-black opacity-90 '>Individual Doubt Clear</div>
            <p className='break-words text-center font-semibold  '>At Dopamine Classes, we keep our batch sizes small to ensure that every topic is clearly understood by students, leaving no room for doubts.</p>
        </div>
        <div><img src="doubt.svg" className='w-[200px]' alt="" /></div>
        </div>

        <div className='why w-[400px] h-[300px] bg-[#A1E3F9] shadow-xl shadow-[#00A9FF]  py-5 px-2.5 flex justify-center items-center rounded-2xl  '>
        <div className='w-full   flex flex-col items-center '>
            <div className='border-2 border-black w-[150px] text-center py-2 rounded-2xl bg-[#3674B5] text-black opacity-90 '>Focus On Boards</div>
            <p className='break-words text-center font-semibold '>At Dopamine Classes, we focus on board exam preparation to ensure that students perform well in their exams.</p>
        </div>
        <div><img src="boards.svg" className='w-[200px]' alt="" /></div>
        </div>

     </div>
    </div>
  )
}

export default Why