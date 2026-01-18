import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = ({handleFavourite, favourites}) => {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetch("/bids.json")
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, []);

    return (
        <div className=''>
            
            <div className="bg-white rounded-2xl">
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th></th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        {
                            auctions.map((auction) => <Auction
                                key={auction.id}
                                auction={auction} 
                                handleFavourite={handleFavourite} 
                                favourites={favourites}>

                            </Auction>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Auctions;