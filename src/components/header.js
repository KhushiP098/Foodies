import React from 'react'
import { Link } from 'react-router-dom'
import { logos } from '../homePagedata/imgData'

const Header = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center xl:h-[30vh] m-5 '>

      <div className='flex  xl:text-2xl font-bold xl:gap-14 justify-center items-center h-[200px] w-[1080px] gap-5'>

        <Link to="/"><p className='xl:flex items-center'><span ><img src={logos[0].delivery} className='h-14 w-14 p-2 m-2 bg-red-300  rounded-full' /></span>Delivery</p></Link>
        <Link to="/diningout"><p className='xl:flex items-center'><span><img src={logos[0].diningOut} className='h-14 w-14 m-2 bg-black/10 p-2 rounded-full' /></span>DiningOut</p></Link>
        <Link to="/nightlife"><p className='xl:flex items-center'><span ><img src={logos[0].nightLife} className='h-14 w-14 m-2 bg-black/10 p-2 rounded-full' /></span>NightLife</p></Link>
      </div>
      <div className='bg-black/10 h-1 xl:w-[1080px] w-full'></div>

    </div>
  )
}

export default Header;
