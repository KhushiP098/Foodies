import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import { logo } from '../../homePagedata/imgData'



const Card1 = ({ item }) => {
    return (
        <div className='flex flex-col  justify-center items-center m-4  p-5 rounded-2xl hover:scale-105 transition-all duration-200 hover:border hover:shadow-xl'>

            <div >

                <div className='relative xl:w-[300px] xl:h-[250px] lg:w-[200px] lg:h-[150px] w-[150px] h-[100px]'>
                    <img src={item.imgdata} className='w-full h-full rounded-xl object-fit' />
                    <p className='px-2 py-1 bg-blue-500 text-sm absolute bottom-4 font-bold left-0 text-white lg:block hidden'>{item.offer}</p>
                    <p className='absolute bottom-4 right-4 bg-white/70 text-black font-bold p-1 lg:block hidden '>{item.time}</p>
                    {
                        
                    }
                </div>
      
            </div>

            <div className='flex xl:w-[300px] lg:w-[200px]  w-[150px] justify-between items-center'> 
                <p className='text-lg font-semibold'>{item.rname}</p>
                <p className='flex items-center bg-green-800 px-2 text-sm text-white rounded-md '>{item.rating}<span className='flex '><AiFillStar className='text-white bg-transparent'/></span></p>
            </div>

            <div className='flex  xl:w-[300px] lg:w-[200px] w-[150px] justify-between items-center'>
                <p className='text-sm'>{item.address.slice(0, 10)}</p>
                <p className='text-sm'>${item.price}</p>
            </div>

            <div className='h-[1px] xl:w-[300px] lg:w-[200px] w-[150px] bg-black/10 mt-2 mb-2'></div>

            <div className='flex items-center m-2'>
                <div className='h-[20px] w-[20px]'><img src={logo} className='h-full w-full' /></div>
                <p className='text-sm'>{item.somedata.slice(0, 20)}</p>
            </div>

        </div>
    )
}

export default Card1
