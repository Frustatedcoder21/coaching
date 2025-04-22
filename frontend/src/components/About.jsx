import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  useGSAP(()=>{
  const tl=gsap.timeline();
  tl.from('.about',{
    opacity:0,
    rotationY:180,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
      trigger:'.about',
      // markers:true,
      start:'top 60%',
      end:'top 60%',
      scrub:2
    }
  })
  },[])
  return (
    <div className='w-full h-full relative font-primary'>
      {/* <div className='w-full h-full absolute top-0 left-0 bg-[url("abstract-2.jpg")] bg-top bg-cover  z-10 opacity-20 '></div> */}
     <div className='w-full h-full relative z-20 py-3 px-1 flex flex-wrap md:flex-nowrap gap-3 justify-around items-center '>
     <div>
      <img src="student.jpg" className='image w-[450px] h-[450px] rounded-full' alt="" />
     </div>
     <div className=' flex flex-col gap-4 items-center'>
      <div className='about w-[90%] md:w-[500px] bg-[#89CFF3] shadow-2xl shadow-blue-500 rounded-2xl px-3 py-2'>
        <p className='text-3xl font-bold break-words'>About Us -</p>
        <p className='break-words'>At Dopamine Classes, we are dedicated to nurturing young minds and shaping future scientists, engineers, and medical professionals. Our coaching institute is built on the principle that learning should be engaging, inspiring, and result-driven. Just like the neurotransmitter dopamine, which plays a crucial role in motivation and learning, we strive to create an environment where students feel excited and confident about their education.</p>    

<p>Our expert faculty, well-structured curriculum, and interactive teaching methods ensure that students not only understand concepts deeply but also develop a scientific temperament. We specialize in Physics, Chemistry, Biology, and Mathematics, providing students with the right guidance to excel in school exams, board exams, and competitive entrance tests like JEE and NEET.
</p>
<p>At Dopamine Classes, we believe in concept-based learning rather than rote memorization. Our small batch sizes, regular tests, doubt-clearing sessions, and personalized mentorship help students track their progress and continuously improve.
</p>
<p>With a passion for education and a commitment to excellence, we aim to ignite curiosity, boost confidence, and drive success in every student who walks through our doors.
</p>
<p>🚀 Join Dopamine Classes and take the first step toward a brighter future!"</p>
 
 </div>
      {/* <div className=' about w-[90%] md:w-[500px] bg-amber-100 rounded-2xl px-3 py-2'>
        <div className='  flex items-center gap-1'> <p className='text-3xl font-bold'>Our Mission</p> <img src="dart.svg" className='w-[50px]' alt="" /></div>
        <ul>
          <li>1️⃣ Empowering Students – Provide high-quality education that builds strong conceptual understanding and problem-solving skills. </li>
          <li>2️⃣ Personalized Learning – Offer small batch sizes and interactive sessions to ensure every student receives individual attention.
          </li>
          <li>3️⃣ Exam Readiness – Prepare students for competitive exams with structured study materials, mock tests, and doubt-clearing sessions.
          </li>
          <li>4️⃣ Holistic Development – Not just academics! We focus on critical thinking, time management, and confidence-building to help students excel in all aspects of life.
          </li>
        </ul>

      </div> */}
     </div>
     </div>
    </div>
  )
}

export default About