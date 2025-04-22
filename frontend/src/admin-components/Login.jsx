import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(null);
    const [val,setVal]=useState(null);
    const [loading,setLoading]=useState(null);
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        setLoading(true)
     const data=await  fetch('http://localhost:5000/admin/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,password
            })
        })
        const response=await data.json();
        console.log();
        
        if(data.ok){
        setVal(response)
        localStorage.setItem('token',response.token)
        navigate('/admin')
        }else{
            setError(response)
        }
    }
   
  return (
    <div className='w-screen h-screen bg-[#CDF5FD] relative'>
     <div className='w-full h-full absolute bg-[url("../dopamine.png")] bg-center bg-cover opacity-10 z-10'>

     </div>
     <div className='w-full h-full flex flex-col justify-center items-center gap-5 absolute z-20'>
     <p className='text-center text-3xl font-bold'>Admin Login</p>
     
     <div >
     <form action="" className='w-[350px] h-[400px] border-2 rounded-2xl flex flex-col justify-center items-center gap-2.5' onSubmit={(e)=>handleSubmit(e)}>
     <input type="email" placeholder='Enter correct email' value={email} className='w-[90%] border-2 h-[40px] rounded-2xl bg-white pl-2.5 text-black' onChange={(e)=>setEmail(e.target.value)} />
     <input type="password" placeholder='Enter correct password' value={password} className='w-[90%] border-2 h-[40px] rounded-2xl bg-white pl-2.5' onChange={(e)=>setPassword(e.target.value)} />
     <input type="submit" placeholder=''  disabled={loading}  value="Submit" className='border-2 px-5 py-1.5 rounded-2xl bg-[#00A9FF]' />
     </form>
     </div>
     {error && <div className='text-red-500'>{error.message}</div>}
     {val && <div className='text-green-400'>{val.message}</div>}
     
     </div>
    </div>
  )
}

export default Login