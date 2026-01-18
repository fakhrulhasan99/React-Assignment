
import { BiBold } from 'react-icons/bi';
import './App.css'
import Auctions from './assets/Components/Auctoins/Auctions'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import { useState } from 'react';
import Favourites from './assets/Components/Favourites/Favourites';
import Footer from './assets/Components/Footer/Footer';

function App() {

  const [favourites, setFavourites] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleFavourite = (auction) => {
    setFavourites(favourites => {
      const exfavs = favourites.some(exfav => exfav.id === auction.id);
      if (exfavs) {
        return favourites;
      }
      return [...favourites, auction];
    })
    handleTotalAmount(auction)
  };
  const handleTotalAmount = (auction) => {
    setTotalAmount(totalAmount => {
      const exfavs = favourites.some(exfav => exfav.id === auction.id);
      if (exfavs) {
        return totalAmount;
      }
      return totalAmount + auction.currentBidPrice;
    })
  };
  const handleRemoveFavourite = (favourite) => {
    const remainingFavs = favourites.filter((cross)=> cross.id !== favourite.id);
    setFavourites(remainingFavs)
    handleRemoveAmount(favourite)
  }
  const handleRemoveAmount = (favourite) => {
    setTotalAmount(totalAmount-favourite.currentBidPrice);
  }

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
            <Favourites favourites={favourites}
              totalAmount={totalAmount}
              key={favourites.id}
              handleRemoveFavourite={handleRemoveFavourite}></Favourites>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
