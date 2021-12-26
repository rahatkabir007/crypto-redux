import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BsCurrencyExchange } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
const Features = () => {
    return (
        <>
            <div className='features-section my-5 '>
                <Container>
                    <div className="features-container">
                        <h1>Our Features</h1>
                        <p className='mb-4' style={{ fontsize: '25px'}}>Cryptocurrencies are the simplest way to exchange money at very low cost.</p>
                        <Row className="my-4">
                            <Col lg={4} className="my-4">
                                <div>
                                    <RiCustomerService2Line style={{ fontSize: '48px', color: '#f7931a'}} />
                                    <h1>Experts Support</h1>
                                    <p style={{ fontSize: '18px'}}>Here You Can Find Expert Supports By Our Employees 24/7 Just By Sending An Email.</p>
                                </div>
                            </Col>
                            <Col lg={4} className="my-4">
                                <div>
                                    <BsCurrencyExchange style={{ fontSize: '48px', color: '#f7931a' }} />
                                    <h1>Exchange Rates</h1>
                                    <p style={{ fontSize: '18px' }}>Here You Can Find Accurate Exchange Rates Of Daily Changes of Cryptos In the Market.</p>
                                </div>
                            </Col>
                            <Col lg={4} className="my-4">
                                <div>
                                    <ImStatsBars style={{ fontSize: '48px', color: '#f7931a' }} />
                                    <h1>Statistics Analysis</h1>
                                    <p style={{ fontSize: '18px' }}>Here You Can Find Expert Statistics of Cryptos From Last Few Years and Get a Analysis.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
               </Container>
            </div>
        </>
    );
};

export default Features;