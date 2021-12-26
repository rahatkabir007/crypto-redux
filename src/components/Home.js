import React from 'react';
import millify from 'millify';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

import { useGetCryptosQuery } from '../services/cryptoApi';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';
import Banner from './Banner/Banner';
import AboutUs from './AboutUs/AboutUs';
import Features from './Features/Features';
import ContactForm from './ContactForm/ContactForm';


const Home = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return (<div className='w-50 text-center mx-auto my-3'><Spinner animation="grow" /></div>);
    return (
        <>
            <Banner />
           
            <Container>
                <div className="global-stats">
                    {/* <h1 className='section-title mt-5 mb-3'>Global Crypto Stats</h1> */}
                    <Row className='global-details'>
                        <Col lg={2} className='my-2'>
                            <h3>Total Crypto Currencies</h3>
                            <h2>{globalStats.total}</h2>
                        </Col>
                        <Col lg={2} className='my-2'>
                            <h3>Total Exchanges</h3>
                            <h2>{millify(globalStats.totalExchanges)}</h2>
                        </Col>
                        <Col lg={2} className='my-2'>
                            <h3>Total Market Cap</h3>
                            <h2>{millify(globalStats.totalMarketCap)}</h2>
                        </Col>
                        <Col lg={2} className='my-2'>
                            <h3>Total Markets Value</h3>
                            <h2>{millify(globalStats.totalMarkets)}</h2>
                        </Col>
                        <Col lg={2} className='my-2'>
                            <h3>Total 24h Volume</h3>
                            <h2>{millify(globalStats.total24hVolume)}</h2>
                        </Col>
                        <Col lg={2} className='my-2'>
                            <h3>Total World Ranges</h3>
                            <h2>{millify(globalStats.totalMarkets)}</h2>
                        </Col>
                    </Row>
                </div>
                <AboutUs />
                <div className="cryptocurrency-container mt-5 mb-3">
                    <h1 className='section-title'>Top 10 Cryptocurrencies in the World</h1>
                    <Link to='/cryptocurrencies' className='show-more'>Show More</Link>
                </div>
                <CryptoCurrencies simplified={true} />
               
              
            </Container>
            <Features />
            <Container>
                <div className="cryptocurrency-container mt-5 mb-3">
                    <h1 className='section-title'>Latest Crypto News</h1>
                    <Link to='/cryptocurrencies' className='show-more'>Show More</Link>
                </div>
                <News simplified={true} />
                <ContactForm/>
            </Container>
        </>
    );
};

export default Home;