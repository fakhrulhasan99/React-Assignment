import React from 'react';
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";

const Auction = ({ auction, handleFavourite, favourites, handleTotalAmount }) => {
    const isFavourite = favourites.some(
        fav => fav.id === auction.id
    )
    const handleClick = () => {
        handleFavourite(auction);
        handleTotalAmount(auction);
    }

    return (
        <tbody>
            <tr>
                <td><img src={auction.image} alt="" className='h-16 w-20 rounded-sm' /></td>
                <td>{auction.title}</td>
                <td>{auction.currentBidPrice} $</td>
                <td>{auction.timeLeft}</td>
                <td><button onClick={handleClick} className={` cursor-pointer`}>
                    {
                        isFavourite ? <VscHeartFilled size={20} className=' text-red-400' /> : <VscHeart size={20} />
                    }
                </button></td>
            </tr>
        </tbody>
    );
};

export default Auction;