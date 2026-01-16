import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = () => {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetch("/bids.json")
            .then(res => res.json())
            .then(data => setAuctions(data))
    }, []);

    return (
        <div className=''>
            <div className="text-left">
                <h2 className=' text-3xl font-bold'>Active Auctions : {auctions.length}</h2>
                <h3 className=' text-2xl'>Discover and bid on extraordinary items</h3>
            </div>
            <div className="bg-white rounded-2xl mt-6">
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
                                auction={auction}>

                            </Auction>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Auctions;