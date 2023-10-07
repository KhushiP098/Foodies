import React,{useEffect, useState} from 'react'
import { toast } from 'react-hot-toast'
import {add,remove} from '../ReduxStore/CartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cards = ({item}) => {
  

  const dispatch=useDispatch();
  const { cart }=useSelector((state)=>state);
  

  const AddToCart=()=>{
    toast.success("Item added to Cart!");
    dispatch(add(item));
  }

  const RemoveFromCart=()=>{

    toast.error("Item removed from Cart!")
    dispatch(remove(item.id));
  }
  
  return (
    <div className='flex flex-col p-5 items-center hover:scale-110 transition-all ease-in duration-200 gap-5 shadow-xl  '>
      <div className='flex justify-center font-serif text-lg h-[250px] w-[250px]'>
        <img src={item.imgdata}  alt="img" className='h-full w-full'/>
      </div>

      <div className='flex flex-col items-center w-[300px] gap-2'>
        <p className='font-bold '>{item.rname}</p>
        <p className='font-bold'>Price: <span className='font-normal text-lg'>${item.price}</span></p>
       {
        cart.some((Citem)=>Citem.id==item.id)?
        <div className='text-center w-[300px]'><button onClick={RemoveFromCart} className='bg-blue-600 w-full font-bold text-white  m-1 p-2'>Delete From Cart</button></div>
        :
        <div className='text-center w-[300px]'><button onClick={AddToCart} className='bg-blue-600 font-bold w-full text-white  m-1 p-2'>Add to Cart</button></div>
        
       }
      </div>
      
    </div>
  )
}

export default Cards;
