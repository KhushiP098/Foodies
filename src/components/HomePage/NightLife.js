import React from 'react'
import Card2 from './Card2'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {HiMiniAdjustmentsHorizontal} from 'react-icons/hi2'
import {CiSliderVertical} from 'react-icons/ci'
import {BiSolidRightArrow} from 'react-icons/bi'
import {NightLifeData} from '../../homePagedata/NightLifeData'
import Header from '../header'


const NightLife = () => {

    const data=[
      {
        img:"https://w0.peakpx.com/wallpaper/414/240/HD-wallpaper-margarita-cocktail-ultra-food-and-drink-fresh-lime-lemonade-organic-cocktail-liquid-drink-beverage-tasty-refreshing-margarita-citrus-icecubes-thumbnail.jpg",
        para:" Happy Hours",
        places:"09 places",
      },

      {
        img:"https://www.eatthis.com/wp-content/uploads/sites/4/2023/02/pilsner-beer.jpg?quality=82&strip=1&w=800",
        para:"Microberies",
        places:"13 places",
      },

      {
        img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDcnGeTfVTOJ6cXBq_SR9ulZ6M7eYspiK-J_MjGc9m6KSWv-wq",
        para:"Best bars and pubs ",
        places:"12 places",
      },

      {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb77Vi8QS_n8NFhbZN4XkKzncuuYiuVoYn-uhO3aLQstG-OO--",
        para:"Artisan Cocktails ",
        places:"22 places",
      },
    ]

  return (

    <div className='w-full flex flex-col items-center justify-center '>

    <Header/>

    <div className='xl:w-[1080px] flex flex-col xl:items-start justify-center items-center '>

<p className='text-3xl font-semibold mt-5'>Collections</p>
<p className='xl:text-xl mt-8 mb-8 text-sm '>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends<span>All collections in Delhi NCR</span></p>


{/* cards */}
<div className='flex xl:flex-row flex-col items-center justify-center gap-5'>
 {
  data.map((item)=>(
    <div className='flex flex-col gap-5'>
      <div className='xl:w-[270px] xl:h-[320px] w-[200px] h-[250px] relative'>
        <img src={item.img} className='w-full rounded-xl h-full'/>
        <p className='absolute text-white font-semibold bottom-8 left-2 '>{item.para}</p>
        <p className='absolute text-white font-semibold bottom-2 left-2 flex items-center '>{item.places}<span><BiSolidRightArrow className='text-white'/></span></p>
      </div>
      
      
    </div>  
  ))
 }
</div>

{/* button section */}
<div className='flex flex-col xl:flex-row gap-5 items-center text-black/40 justify-start mt-14 mb-5'>

<div className='flex items-center p-2  rounded-xl border-black/25 border'><span><HiMiniAdjustmentsHorizontal/></span>Filters</div>
<div className='flex items-center p-2 rounded-xl border-black/25 border'><span><MdOutlineKeyboardArrowDown /></span>Pro Offers</div>
<div className='flex items-center p-2 rounded-xl border-black/25 border'><span><CiSliderVertical/></span>Distance</div>
<div className=' p-2 rounded-xl border-black/25 border'>Rating: 4.0+</div>
<div className=' p-2 rounded-xl border-black/25 border'>Pubs & Bars</div>


</div>


<p className='m-10 text-3xl  font-semibold'>Nightlife Restaurants in Bangalore</p>

{/* cards-2*/}
<div className='grid xl:grid-cols-3 grid-cols-1 xl:w-[1180px] items-center justify-center gap-2 '>
      {
        NightLifeData.map((item)=>(
         <Card2 item={item} key={item.id}/>
        ))
      }

    </div> 

    </div>

    </div>
   
  )
}

export default NightLife
