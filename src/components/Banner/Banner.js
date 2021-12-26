import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <>
        <div className="banner-section">
            <div className="banner-intro">
                <h1>Welcome To,<br/> <span id="crypto-title" style={{ color: '#f7931a',fontSize: '55px'}}>Crypto World</span></h1>
                <p id="crypto-slogan" style={{fontSize: '15px', opacity: "0.7"}}>Get Your Crypto Knowledge Right Here</p>
               <p>We are a medium to make you familiar with everything that is going on within the Crypto World.</p>
           </div>
        </div>
        </>
    );
};

export default Banner;