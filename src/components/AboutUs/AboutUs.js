import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
            <Container>
                <div className="about-section my-5 py-5">
                    <div>
                        <img src="https://i.ibb.co/ryJPB4q/xabout-img-png-pagespeed-ic-d-BRcy6-Q4-O8.png" alt="" />

                    </div>
                    <div className='about-text'>
                        <h1>What is Crypto</h1>
                        <p id="about-intro">Cryptocurrencies are an innovative payment network and a new kind of money.</p>
                        <p id="about-details">Cryptocurrencies are one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It's the dawn of a better, more free world.</p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AboutUs;