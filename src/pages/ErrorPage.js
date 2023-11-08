import React from 'react'
import {Link }from 'react-router-dom'
import Img2 from '../data/Img2.png'

const ErrorPage = () => {
  return (
    <div  className='h-full w-full flex items-center justify-center'>
         <div className=' w-full h-full flex flex-col  justify-center  text-center items-center gap-5'>
      <div className='h-[250px] w-[300px] bg-slate-400 rounded-2xl'> <img src={Img2} className='w-full h-full'/></div>
      <p className='font-bold text-3xl text-slate-500'>Something went wrong...</p>
     <p className='font-bold text-3xl text-slate-500'>Page Not Found</p>
     <Link to='/'><button className='text-lg w-[200px] font-bold bg-slate-500 text-white m-4 p-4 rounded-xl '>Go back</button></Link>
    </div>
      
    </div>
  )
}

export default ErrorPage
