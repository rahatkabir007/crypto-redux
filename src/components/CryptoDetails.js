import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi';
import { AiOutlineMoneyCollect, AiOutlineDollarCircle, AiOutlineFund, AiOutlineExclamationCircle, AiOutlineStop, AiOutlineTrophy, AiOutlineCheck, AiOutlineNumber, AiOutlineThunderbolt } from 'react-icons/ai';
import millify from 'millify';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import LineChart from './LineChart';


const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const cryptoDetails = data?.data?.coin;

    if (isFetching) return (<div className='w-50 text-center mx-auto my-3 spinners-section'><Spinner animation="grow" /></div>);

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <AiOutlineDollarCircle /> },
        { title: 'Rank', value: cryptoDetails.rank, icon: <AiOutlineNumber /> },
        { title: '24h Volume', value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`, icon: <AiOutlineThunderbolt /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <AiOutlineDollarCircle /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <AiOutlineTrophy /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <AiOutlineFund /> },
        { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <AiOutlineMoneyCollect /> },
        { title: 'Aprroved Supply', value: cryptoDetails.approvedSupply ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle /> },
        { title: 'Total Supply', value: `$ ${millify(cryptoDetails.totalSupply)}`, icon: <AiOutlineExclamationCircle /> },
        { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.circulatingSupply)}`, icon: <AiOutlineExclamationCircle /> },
    ];
    return (
        <Container>
            <Row className="coin-detail-container">
                <Col className="coin-heading-container">
                    <h1 level={2} className="coin-name">
                        {data?.data?.coin.name} ({data?.data?.coin.slug}) Price
                    </h1>
                    <p>{cryptoDetails.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
                </Col>
                <Form.Select defaultValue="7d" className="select-timePeriod" placeholder="Select Timeperiod" onChange={(e) => setTimePeriod(e.target.value)}>
                    {time.map((date) => <option key={date}>{date}</option>)}
                </Form.Select>
                <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails.price)} coinName={cryptoDetails.name} />
                <Row className="stats-container">
                    <Col lg={4} className="coin-value-statistics mx-auto">
                        <h1 className="coin-details-heading">{cryptoDetails.name} Value Statistics</h1>
                        <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                        {stats.map(({ icon, title, value }) => (
                            <Row className="coin-stats">
                                <Col lg={8} className="coin-stats-name">
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <p className="me-1">{icon}</p>
                                        <p>{title}</p>
                                    </div>
                                </Col>
                                <Col lg={4}>  <p className="stats text-end">{value}</p></Col>
                            </Row>
                        ))}
                    </Col>
                    <Col lg={4} className="other-stats-info mx-auto">
                        <h1 className="coin-details-heading">Other Statistics Info</h1>
                        <p>An overview showing the statistics of {cryptoDetails.name}, such as the base and quote currency, the rank, and trading volume.</p>
                        {genericStats.map(({ icon, title, value }) => (
                            <Row className="coin-stats" gy={4}>
                                <Col lg={8} className="coin-stats-name ">
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <p className="me-1">{icon}</p>
                                        <p>{title}</p>
                                    </div>
                                </Col>
                                <Col lg={4}>  <p className="stats text-end">{value}</p></Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
               
                <Row className="coin-desc-link">
                    <Row className="coin-desc text-start">
                        <h1 level={3} className="coin-details-heading">What is {cryptoDetails.name}?</h1>
                        {HTMLReactParser(cryptoDetails.description)}
                    </Row>
                    <Col className="coin-links text-start">
                        <h1 level={3} className="coin-details-heading">{cryptoDetails.name} Links</h1>
                        {cryptoDetails.links?.map((link) => (
                            <Row className="coin-link" key={link.name}>
                                <Col lg={4}><h4 level={5} className="link-name">{link.type.toUpperCase()}</h4></Col>
                                <Col lg={4}><a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></Col>

                            </Row>
                        ))}
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default CryptoDetails;