import React from 'react';
import { VscHeart } from "react-icons/vsc";
import Empty from '../Empty/Empty';
import Favourite from '../Favourite/Favourite';

const Favourites = ({ favourites }) => {

    return (
        <div className='bg-white rounded-2xl'>
            <div className='flex items-center justify-center py-6 gap-3'>
                <VscHeart size={20} />
                <h2 className='text-2xl font-bold'>Favourite Items</h2>
            </div>
            <Favourite favourite={favourites}></Favourite>
            <Empty></Empty>

            <div className='flex justify-around text-xl pb-3'>
                <h3>Total Bids Amount</h3>
                <h3>$0000</h3>
            </div>
        </div>
    );
};

export default Favourites;