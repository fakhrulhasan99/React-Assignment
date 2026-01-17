import React from 'react';
import { VscHeart } from "react-icons/vsc";

const Empty = () => {
    return (
        <div>
            <div>
                <div className='py-6 my-3 border-y border-slate-200'>
                    <h3 className='text-2xl'>No favourite yet</h3>
                    <p className='text-slate-400'>Click the heart icon on any item to add it to your favourites</p>
                </div>
            </div>
        </div>
    );
};

export default Empty;