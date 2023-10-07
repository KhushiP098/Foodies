import React,{useState} from 'react'
import {AiFillDelete}  from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import {remove} from '../ReduxStore/CartSlice'
import {useDispatch} from 'react-redux'
import toast from 'react-hot-toast'

const CardItemDetail = ({item}) => {
    
    const dispatch=useDispatch();

    const Price=item.price;
    // const [quantity,setQuantity]=useState(item.qnty+1);
    const[amount,setAmount]=useState(Price);

    //  const Increment=()=>{
    //   setQuantity(quantity+1);
    //   setAmount((quantity+1)*Price);
    //  }

    //  const Decrement=()=>{
    //     if(quantity!=0){
    //         setQuantity(quantity-1);
    //         setAmount((quantity-1)*Price);
    //     }
    //  }

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Removed from Cart!");
        
    }


  return (
    <div className='xl:w-[1080px] w-[80vw] flex flex-col justify-center items-center m-4  p-5 border rounded-xl hover:scale-105 transition-all duration-200 shadow-xl ' >

        <div className=' flex flex-col items-center justify-center xl:flex-row xl:gap-10 '>
            <div className='xl:h-[300px] xl:w-[300px] h-[200px] w-[200px]'>
                <img src={item.imgdata} className='h-full w-full'/>
            </div>

            <div className='flex flex-col justify-center items-center text-lg xl:w-[500px] gap-5'>
                <p className='text-2xl font-bold'>Restaurant:<span className='font-normal '>{item.rname}</span></p>
                <div className='grid xl:grid-cols-2  grid-cols-1 gap-3'>
                    <p className='font-bold'>Price:<span className='font-normal' >{item.price} </span></p>
                    <p className='font-bold items-center flex '>Rating:<span className='bg-green-500 p-1 m-1 text-white rounded-md flex items-center'>{item.rating}<AiFillStar className='text-white '/></span></p>
                    <p className='font-bold'>Dishes:<span className='font-normal'>{item.address}</span></p>
                    <p className='font-bold text-sm'>Order review:<span className='font-normal'>{item.somedata}</span></p>
                    <p className='font-bold'>Total:<span className='font-normal'>{amount}</span></p>
                    <p className='font-bold flex items-center'>Remove:<button className='font-normal inline-block' onClick={removeFromCart}><AiFillDelete className='text-red-600 w-6 h-6' /></button></p>
                    
                    {/* <div className='flex '>
                    <button onClick={Decrement} className='bg-black/10 p-2 font-bold' >-</button>
                    <p className='bg-black/10 p-2 font-bold' >{quantity}</p>
                    <button onClick={Increment} className='bg-black/10 p-2 font-bold' >+</button>

                    </div> */}

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default CardItemDetail
