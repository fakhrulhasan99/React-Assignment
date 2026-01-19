
import { BiBold } from 'react-icons/bi';
import './App.css'
import Auctions from './assets/Components/Auctoins/Auctions'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import { useState } from 'react';
import Favourites from './assets/Components/Favourites/Favourites';
import Footer from './assets/Components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [favourites, setFavourites] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleFavourite = (auction) => {
    const alreadyExists = favourites.some(
      fav => fav.id === auction.id
    );

    if (alreadyExists) {
      handleInfo();
      return;
    }

    setFavourites(prev => [...prev, auction]);
    setTotalAmount(prev => prev + auction.currentBidPrice);

    handleAdd();
  };

  const handleRemoveFavourite = (favourite) => {
    const remainingFavs = favourites.filter((cross) => cross.id !== favourite.id);
    setFavourites(remainingFavs)
    handleRemoveAmount(favourite)
  }
  const handleRemoveAmount = (favourite) => {
    setTotalAmount(totalAmount - favourite.currentBidPrice);
  }
  const handleAdd = () => {
    toast.success("Item Added to your Favourite lists ❤️");
  };
  const handleInfo = () => {
    toast.info("Item already added to favourites ⚠️");
  }
  const handleRemove = () => {
    toast.warning("Item Removed from your Favourite lists 🗑️");
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="text-left bg-slate-300 pt-6 px-6">
          <h2 className=' text-3xl font-bold'>Active Auctions</h2>
          <h3 className=' text-lg'>Discover and bid on extraordinary items</h3>
        </div>

        <div className="flex text-center gap-2 bg-slate-300 p-6">
          {/* left container */}
          <div className="w-[60%] ">
            <Auctions handleFavourite={handleFavourite}
              favourites={favourites}
            ></Auctions>

          </div>
          {/* right container */}
          <div className="w-[40%]">
            <Favourites favourites={favourites}
              totalAmount={totalAmount}
              key={favourites.id}
              handleRemoveFavourite={handleRemoveFavourite}
              handleRemove={handleRemove}></Favourites>
          </div>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
