
import { BiBold } from 'react-icons/bi';
import './App.css'
import Auctions from './assets/Components/Auctoins/Auctions'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import { useState } from 'react';
import Favourites from './assets/Components/Favourites/Favourites';

function App() {

  const [favourites, setFavourites] = useState([]);

  const handleFavourite = (auction) => {
    setFavourites([...favourites, auction])
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

        <div className="flex text-center gap-2 bg-slate-300 p-6">
          {/* left container */}
          <div className="w-[60%] ">
            <Auctions handleFavourite={handleFavourite} favourites={favourites}></Auctions>

          </div>
          {/* right container */}
          <div className="w-[40%]">
            <Favourites favourites={favourites} key={favourites.id}></Favourites>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
