import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const Favourite = ({ favourites, handleRemoveFavourite }) => {
    return (
        <div>
            {
                favourites.map(favourite =>
                    <div className=" bg-base-100" key={favourite.id}>
                        <div className="card-body border-y border-slate-200 p-2">
                            <div className="flex justify-between ">
                                <img className='h-12 w-12 rounded-sm' src={favourite.image} alt="" />
                                <div>
                                    <p>{favourite.title}</p>
                                    <div className='flex justify-between'>
                                        <p>$ {favourite.currentBidPrice}</p>
                                        <p>Bids : {favourite.bidsCount}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemoveFavourite(favourite)} className="cursor-pointer">
                                    <RxCrossCircled size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Favourite;