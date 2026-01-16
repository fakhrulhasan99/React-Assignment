import React from 'react';

const Auction = ({ auction }) => {

    return (
        <tbody>
            <tr>
                <td><img src={auction.image} alt="" className='h-16 w-16 rounded-xl' /></td>
                <td>{auction.title}</td>
                <td>{auction.currentBidPrice} $</td>
                <td>{auction.timeLeft}</td>
                <td><button className='btn'></button></td>
            </tr>
        </tbody>
    );
};

export default Auction;