import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location=useLocation();
  const path=location.pathname.split('/').at(-1);
  console.log(path);

  const {cart}=useSelector((state)=>state);
  return (
    <div className='flex  xs:w-full bg-slate-900 justify-center items-center h-[100px] w-[280px] p-4 '>
      <div className='flex  gap-10 bg-slate-900 text-white sm:text-lg  items-center sm:justify-between justify-center p-2 '>

     <div className='sm:block hidden'> <p className='font-bold font-serif text-3xl'>@FoodieS</p></div>

      <div className='flex xs:flex-row  justify-center items-center gap-8'>
      <Link to='/' ><p className="font-bold font-serif">Home</p></Link>
      <Link to='/menu'><p className='font-bold font-serif '>Menu</p></Link>

      <div className='group relative'>
      <Link to='/cart'><p className='flex font-bold font-serif items-center group-hover:cursor-pointer'>Cart <span ><BsCart4 className='sm:h-8 sm:w-8 h-6 w-6'/></span></p></Link>
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
