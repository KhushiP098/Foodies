import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card2 = ({item}) => {
  return (
    <div className='flex flex-col justify-center items-center m-4  p-5  rounded-2xl hover:scale-105 transition-all duration-200 hover:border hover:shadow-xl'>

    <div>

        <div className=' xl:w-[300px] xl:h-[250px] lg:w-[250px] lg:h-[200px] w-[200px] h-[150px]'>
            <img src={item.imgdata} className='w-full h-full rounded-xl' />
            
        </div>

    </div>

    <div className='flex xl:w-[300px] lg:w-[250px]  w-[200px] justify-between items-center'> 
        <p className='text-lg font-semibold'>{item.rname}</p>
        <p className='flex items-center bg-green-800 px-2 text-sm text-white rounded-md '>{item.rating}<span className='flex '><AiFillStar className='text-white bg-transparent'/></span></p>
    </div>

    <div className='flex  xl:w-[300px] lg:w-[250px]  w-[200px]  justify-between items-center'>
        <p className='text-sm'>{item.address}</p>
        <p className='text-sm'>${item.price}</p>
    </div>

    <div className='h-[1px] xl:w-[300px] lg:w-[250px]  w-[200px]  bg-black/10 mt-2 mb-2'></div>

</div>
  )
}

export default Card2;
