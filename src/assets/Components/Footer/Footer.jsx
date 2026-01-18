import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <div>
                    <a className="btn btn-ghost text-2xl"><span className=' text-[#003EA4]'>Auction</span><span className=' font-extrabold text-[#FFD337]'>Gallery</span></a>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <p className=' text-xl'>Bid.</p>
                    <p className=' text-xl'>Win.</p>
                    <p className=' text-xl'>Own.</p>
                </nav>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to work</a>
                </nav>
                <aside>
                    <p>© 2025 AuctionHub. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;