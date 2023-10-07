import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Menu from './pages/menuPage';
import Home from './pages/homePage';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import NightLife from './components/HomePage/NightLife';
import DiningOut from './components/HomePage/DiningOut';


function App() {
  return (
    <div  className='h-full w-full'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/nightlife" element={<NightLife/>}/>
        <Route path="/diningout" element={<DiningOut/>}/>
      </Routes>

      <Footer/>

    </div>
  );
}
export default App;
