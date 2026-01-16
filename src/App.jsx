
import { BiBold } from 'react-icons/bi';
import './App.css'
import Auctions from './assets/Components/Auctoins/Auctions'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import { VscHeart } from "react-icons/vsc";
import { useState } from 'react';

function App() {

  const [favourite, setFavourite] = useState([]);

  const handleFavourite = (auction) => {
    setFavourite([...favourite, auction])
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="text-left bg-slate-300 pt-6 px-6">
          <h2 className=' text-3xl font-bold'>Active Auctions</h2>
          <h3 className=' text-2xl'>Discover and bid on extraordinary items</h3>
        </div>
        <div className="main-container flex text-center gap-2 bg-slate-300 p-6">
          <div className="left-container w-[65%] ">
            <Auctions handleFavourite={handleFavourite}></Auctions>

          </div>
          <div className="right-container w-[35%]">
            <div className='bg-white rounded-2xl'>

              <div className='flex items-center justify-center pt-6 gap-3'>
                <VscHeart size={20}/>
                <h2 className='text-2xl font-bold'>Favourite Items</h2>
              </div>
              <div className='py-6 my-3 border-y border-slate-200'>
                <h3 className='text-2xl'>No favourite yet</h3>
                <p className='text-slate-400'>Click the heart icon on any item to add it to your favourites</p>
              </div>
              <div className='flex justify-around text-xl pb-3'>
                <h3>Total Bids Amount</h3>
                <h3>$0000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
