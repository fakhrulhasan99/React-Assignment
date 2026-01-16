import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = () => {

    const [auctions, setAuctions] = useState([]);

    useEffect(()=>{
        fetch("/bids.json")
        .then(res => res.json())
        .then(data => setAuctions(data))
    },[]);
    
    return (
        <div>
            {
                auctions.map((auction) => <Auction 
                key={auction.id}
                auction = {auction}>

                </Auction>)
            }
        </div>
    );
};

export default Auctions;