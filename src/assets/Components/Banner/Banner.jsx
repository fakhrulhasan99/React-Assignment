import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero aspect-2/1"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/ynv7QcKL/Banner-min.jpg)",
                }}
            >
                <div className=""></div>
                <div className="w-full justify-start px-16 text-white">
                    <div className=" max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn bg-white rounded-full">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;