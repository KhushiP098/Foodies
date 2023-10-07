import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux/'
import CardItemDetail from '../components/CardItemDetail'


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

    <div className='h-full w-full flex items-center justify-center' >

    {
      cart.length>0?

      
      <div className=' w-full m-10 p-5 gap-5 flex flex-col justify-center items-center'>

       {
       cart.map((item)=>(
        <CardItemDetail key={item.id} item={item} />
       ))
       }

       <div className='flex flex-col gap-5'>
       <div className=" text-xl md:text-4xl font-bold font-serif">  Cart Summary</div>
            
            <div className="text-lg ">
             <p className=" font-sans">
              <span>Total Items:{cart.length} </span>
             </p> 

              <p className=" text-lg md:text-xl font-bold font-serif mt-5">Total Amount :${totalAmount}</p>
              <button className="text-white bg-black/80 m-4 p-4 rounded-xl font-bold">Order now</button>
             </div> 

       </div>

      </div>:

     <div className=' w-full xl:h-[calc(100vh-10vh)] h-[calc(100vh-280px)] flex flex-col justify-center items-center gap-5'>
     <h1 className='font-bold text-3xl'>Your Cart is Empty</h1>
     <Link to='/menu'><button className='text-lg font-bold bg-black/60 text-white m-4 p-4 rounded-xl '>Shop Now</button></Link>

     </div>  
    }
      
    </div>
  )
}

export default CartPage
