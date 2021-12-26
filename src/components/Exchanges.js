import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import './Exchanges.css';
import { useGetExchangesQuery } from '../services/cryptoApi';


const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return (<div className='w-50 text-center mx-auto my-3 spinners-section'><Spinner animation="grow" /></div>);


    return (
        <React.Fragment >
            <Container>
                <Row className='my-4 text-center '>
                    <Col className='text-start'>Exchanges</Col>
                    <Col >24h Trade Volume</Col>
                    <Col >Markets</Col>
                    <Col >Change</Col>
                </Row>
                {
                    exchangesList.map((exchange) => (
                        <Accordion>
                            <Row key={exchange.id} >
                                <Accordion.Item eventKey="0" >

                                    <Accordion.Header>
                                        <Row>
                                            <Col>
                                                <div className="d-flex align-items-center justify-content-start ">
                                                    <p className='me-2'>{exchange.rank }.</p>
                                                    <img src={exchange.iconUrl} className="exchange-image me-2" alt="" />
                                                    <p><strong>{exchange.name}</strong></p>
                                                </div>
                                            </Col>
                                            <React.Fragment  >
                                                <Col>${millify(exchange.volume)}</Col>
                                                <Col>{millify(exchange.numberOfMarkets)}</Col>
                                                <Col>{millify(exchange.marketShare)}%</Col>
                                           </React.Fragment>
                                        </Row>
                                    </Accordion.Header>

                                    <Accordion.Body className="exchange-details">
                                        {HTMLReactParser(exchange.description || '')}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Row>
                        </Accordion>
                    ))
                }



            </Container>
        </React.Fragment>
    );
};

export default Exchanges;