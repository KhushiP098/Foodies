import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/'
import CardItemDetail from '../components/CardItemDetail'
import Img from '../data/Img1.png'

const CartPage = () => {

  const {cart}=useSelector((state)=>state);
  
  const [totalAmount,setTotalAmount]=useState(0);


  useEffect(()=>{

    const calculateTotal=()=>{
      let total= 0;
     {
       cart.forEach((cartItem)=>{
         total+=cartItem.price;
       })
     }
     console.log(total);
     setTotalAmount(total);
 
   }

   calculateTotal();

  },[cart])

  return (
    

    <div className=' w-full flex items-center outline justify-center' >
    {
      cart.length>0?
      <div className=' w-full m-10 p-5 gap-5 flex flex-col justify-center items-center'>

       {
       cart.map((item)=>(
        <CardItemDetail key={item.id} item={item} />
       ))
       }

       <div className='flex flex-col gap-5'>
       <div className="  text-4xl font-bold font-serif mt-6">  Cart Summary</div>
            
            <div className="text-lg ">
             <p className=" font-sans">
              <span>Total Items:{cart.length} </span>
             </p> 

              <p className=" text-lg md:text-xl font-bold font-serif mt-5">Total Amount :${totalAmount}</p>
              <button className="text-white bg-black/80 m-4 p-4 rounded-xl font-bold">Order now</button>
             </div> 

       </div>

      </div>:
     <div className=' w-full flex flex-col  justify-center items-center text-center gap-5'>
      <div className='sm:h-[250px] sm:w-[300px] h-[200px] w-[200px]  shadow-lg'> <img src={Img} className='w-full h-full '/></div>
      <p className='font-bold text-3xl text-slate-500'>Ooops..</p>
     <p className='font-bold text-3xl text-slate-500'>Your Cart is Empty</p>
     <Link to='/menu'><button className='text-lg font-bold  w-[200px]  bg-slate-500 text-white p-4 rounded-xl m-6'>Shop Now</button></Link>

     </div>  
    }
      
    </div>
  )
}

export default CartPage;
