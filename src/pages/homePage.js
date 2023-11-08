
import Header from '../components/header'
import {foods} from '../homePagedata/imgData'
import {brands} from '../homePagedata/imgData'
import {Restaurants} from '../homePagedata/hotels'
import Card1 from '../components/HomePage/Card1'


const Home = () => {
   
  return (
    <div className='w-full flex flex-col items-center outline justify-center '>

      <Header/>
        
        <div className='flex flex-col items-center justify-center m-8 '>

        <div className=' flex flex-col items-center justify-center m-5 bg-black/5 '>
          <p className='sm:text-4xl font-mono mb-8 mt-5 font-bold text-2xl'>Eat what makes you happy</p>

          <div className=' flex sm:flex-row flex-col xl:w-[1180px] items-center justify-center overflow-auto gap-2 flex-wrap'>
            { 
              foods.map((item)=>(
                <div className='flex flex-col items-center justify-center p-2 m-2 '>
                  <div className='xl:w-[250px] xl:h-[200px]  lg:w-[180px] lg-h-[200px] w-[150px] h-[100px] '><img src={item.img} className='w-full h-full'/></div>
                  <p className='text-lg font-md'>{item.name}</p>
                 </div> 
              ))
            }

          </div>
        </div>

        <div className='flex flex-col items-center m-5'>
          <p className='sm:text-4xl font-mono mb-8 mt-5 font-bold text-2xl'>Top Brands for You</p>
          <div className='flex flex-col sm:flex-row w-[1180px] items-center justify-center gap-8 '>
            <div className='md:w-[170px] md:h-[150px] w-[100px] h-[80px]  '><img src={brands[0].lapinoz} className='w-full h-full' alt="image"/></div>
            <div className='md:w-[170px] md:h-[150px] w-[100px] h-[80px]'><img src={brands[0].mcdonald} className='w-full h-full'alt="image"/></div>
            <div className='md:w-[170px] md:h-[150px] w-[100px] h-[80px]'><img src={brands[0].thf} className='w-full h-full' alt="image"/></div>
            <div className='md:w-[170px] md:h-[150px] w-[100px] h-[80px]'><img src={brands[0].dominos} className='w-full h-full' alt="image"/></div>

          </div>
        </div>

        <div className=' flex flex-col items-center justify-center m-5 ' >
          <div className='sm:text-4xl text-2xl font-mono mb-8 mt-5 font-bold'>Delivery Restaurants in Banglore</div>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  items-center justify-center  '>
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
