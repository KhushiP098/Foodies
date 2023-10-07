import React,{useState,useEffect} from 'react'
import Header from '../components/header'
import DiningOut from '../components/HomePage/DiningOut'
import NightLife from '../components/HomePage/NightLife'
import {foods} from '../homePagedata/imgData'
import {brands} from '../homePagedata/imgData'
import {Restaurants} from '../homePagedata/hotels'
import Card1 from '../components/HomePage/Card1'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { Nightlife } from '@mui/icons-material'

const Home = () => {
   const location=useLocation();
   const category=location.pathname.split("/").at(-1);
   
   const [Path,setPath]=useState("/");

   useEffect(()=>{
      console.log(category)
   },[location.pathname])


  return (
    <div className='w-full  flex flex-col items-center justify-center '>

      <Header/>
        
        <div className='w-full flex flex-col items-center justify-center m-8 '>

        <div className='w-full flex flex-col items-center justify-center m-5 bg-black/5 '>
          <p className='lg:text-4xl font-mono mb-8 mt-5 font-bold sm:text-lg'>Eat what makes you happy</p>

          <div className='flex flex-col xl:flex-row w-[1180px] items-center justify-between overflow-auto gap-2 '>
            { 
              foods.map((item)=>(
                <div className='flex flex-col items-center justify-between p-2 m-2 gap-2'>
                  <div className='w-[250px] h-[200px]'><img src={item.img} className='w-full h-full'/></div>
                  <p className='text-lg font-md'>{item.name}</p>
                 </div> 
              ))
            }

          </div>
        </div>

        <div className='w-full flex flex-col items-center m-5'>
          <p className='text-4xl font-mono mb-8 mt-5 font-bold'>Top Brands for You</p>
          <div className='flex flex-col xl:flex-row w-[1180px] items-center justify-center gap-8 '>
            <div className='w-[170px] h-[150px]'><img src={brands[0].lapinoz} className='w-full h-full'/></div>
            <div className='w-[170px] h-[150px]'><img src={brands[0].mcdonald} className='w-full h-full'/></div>
            <div className='w-[170px] h-[150px]'><img src={brands[0].thf} className='w-full h-full'/></div>
            <div className='w-[170px] h-[150px]'><img src={brands[0].dominos} className='w-full h-full'/></div>

          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center m-5 ' >
          <p className='text-4xl font-mono mb-8 mt-5 font-bold'>Delivery Restaurants in Banglore</p>
          <div className='grid grid-rows-24 grid-cols-1 lg:grid-cols-2 lg:grid-rows-12 xl:grid-rows-8 xl:grid-cols-3 w-[1180px] items-center justify-center gap-2 '>
            {
              Restaurants.map((item)=>(
               <Card1 item={item} key={item.id}/>
              ))
            }

          </div> 
        </div>
      </div> 
    </div>
  )
}

export default Home;
