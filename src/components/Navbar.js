import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {cart}=useSelector((state)=>state);
  return (
    <div className='flex w-full  bg-slate-900 justify-center items-center xl:h-[10vh] h-[280px] p-4 '>
      <div className='flex xl:flex-row flex-col gap-10 bg-slate-900 text-white text-lg  items-center xl:justify-between p-2 w-[1080px]'>

     <div> <p className='font-bold font-serif text-3xl'>@FoodieS</p></div>

      <div className='flex xl:flex-row flex-col justify-center items-center gap-8'>
      <Link to='/'><p className='font-bold font-serif '>Home</p></Link>
      <Link to='/menu'><p className='font-bold font-serif '>Menu</p></Link>

      <div className='group relative'>
      <Link to='/cart'><p className='flex font-bold font-serif items-center group-hover:cursor-pointer'>Cart <span ><BsCart4 className='h-8 w-8'/></span></p></Link>
      {
        cart.length>0
        &&
        <div className='absolute -top-3 -right-1'><p className='bg-green-600 px-2 py-1 text-sm font-extrabold rounded-full'>{cart.length}</p></div>
    
      }
      </div>
      </div>


      </div>
    </div>
  )
}

export default Navbar
