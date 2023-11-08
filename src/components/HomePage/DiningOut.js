import React from 'react'
import {BiSolidRightArrow} from 'react-icons/bi'
import Card2 from './Card2'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {HiMiniAdjustmentsHorizontal} from 'react-icons/hi2'
import {CiSliderVertical} from 'react-icons/ci'
import {DiningOutData} from '../../homePagedata/DiningOutData'
import Header from '../header'

const DiningOut = () => {

  const data=[
      {
        img:"https://images.unsplash.com/photo-1587385789097-0197a7fbd179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldCUyMGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        para:"Live Sports Screening",
        places:"12 places",
      },
      {
        img:"https://e0.pxfuel.com/wallpapers/150/450/desktop-wallpaper-paris-cafe-french-cafe.jpg",
        para:"Newly Opened",
        places:"17 places",
      },
      {
        img:"https://atasteofabroad.com/wp-content/uploads/2022/09/andy-hay-ZN-TT10kf4o-unsplash-2-225x300.jpg",
        para:"Veggie Friendly ",
        places:"23 places",
      },
      {
        img:"https://www.rupens.com/cdn/shop/articles/e144e19c16bd44e1d347177ce2e70593_1080x.png?v=1624106456",
        para:"Trending this week",
        places:"30 places",
      }
  ]

  return (

    <div className='w-full flex flex-col items-center justify-center '>

      <Header/>

      <div className='xl:w-[1080px] w-full items-center justify-center flex xl:items-start flex-col  '>

      <p className='text-3xl font-semibold mt-5'>Collections</p>
      <p className='xl:text-xl mt-8 mb-8 text-sm'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends<span>All collections in Delhi NCR</span></p>

     <div className='flex flex-row justify-center flex-wrap '>
       {
        data.map((item)=>(
          <div className='flex flex-col gap-5  p-2 m-2'>
            <div className='xl:w-[250px] xl:h-[300px] lg:w-[200px] lg:h-[250px]  w-[150px] h-[200px] relative'>
              <img src={item.img} className='w-full rounded-xl h-full'/>
              <p className='absolute text-white font-semibold bottom-8 left-2 '>{item.para}</p>
              <p className='absolute text-white font-semibold bottom-2 left-2 flex items-center '>{item.places}<span><BiSolidRightArrow className='text-white'/></span></p>
            </div>
          </div>  
        ))
       }
     </div>

     <div className='flex sm:flex-row flex-wrap  gap-5 items-center text-black/40 sm:justify-start justify-center mt-14 mb-5'>

      <div className='flex items-center p-2  rounded-xl border-black/25 border'><span><HiMiniAdjustmentsHorizontal/></span>Filters</div>
      <div className='flex items-center p-2 rounded-xl border-black/25 border'><span><MdOutlineKeyboardArrowDown /></span>Pro Offers</div>
      <div className='flex items-center p-2 rounded-xl border-black/25 border'><span><CiSliderVertical/></span>Distance</div>
      <div className=' p-2 rounded-xl border-black/25 border'>Rating: 4.0+</div>
      <div className=' p-2 rounded-xl border-black/25 border'>Pubs & Bars</div>


     </div>

     <p className='m-10 text-3xl font-semibold'>Dine-Out Restaurants in Bangalore</p>

     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-2 '>
            {
              DiningOutData.map((item)=>(
               <Card2 item={item} key={item.id}/>
              ))
            }

      </div> 
    </div>
    </div>  
    
  )
}

export default DiningOut
