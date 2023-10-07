import React,{useState} from 'react'
import Cardsdata from '../data/CardsData'
import Cards from '../components/Cards'
import {Restaurants} from  '../homePagedata/hotels' 

const Menu = () => {
  const [data,setData]=useState(Cardsdata)
  return (
    <div className='flex justify-center items-center m-5 flex-col'>
      <p className=' font-semibold font-serif text-3xl'>Eat what makes You happy</p>
      <div className='grid grid-cols-1 grid-rows-33 xl:grid-cols-3 xl:grid-rows-3 gap-10 m-10 ' >
       {
        data.map((item)=>(
          <Cards key={item.id} item={item} />
        ))
       }

       {
        Restaurants.map((item,index)=>(
          <Cards key={index} item={item} />
        ))
       }
     
      </div>
      
    </div>
  )
}

export default Menu;
