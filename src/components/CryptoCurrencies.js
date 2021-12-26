import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Card, Col, Container, Form, FormControl, Row, Spinner } from 'react-bootstrap';
import './CryptoCurrencies.css';

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

    const [cryptos, setCryptos] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);

    }, [cryptosList,searchTerm])

    if (isFetching) return (<div className='w-50 text-center mx-auto my-3 spinners-section'><Spinner animation="grow" /></div>);

    return (
        <>
            <Container>
                {
                    !simplified && (
                        <div className="search-area">
                            <Form onChange={(e) => setSearchTerm(e.target.value)}>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 search-input"
                                    aria-label="Search"
                                />

                            </Form>
                        </div>
                    )
                }
                <Row className='crypto-card-container'>
                    {cryptos?.map((currency) => (
                        <Col xs={12} sm={12} lg={3} className='crypto-card' key={currency.id}>
                            <Link to={`/crypto/${currency.id}`} className='card-links'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <div className='coins-title'>
                                            <Card.Title>{`${currency.rank}. ${currency.name}`}</Card.Title>
                                            <Card.Img variant="top" src={currency.iconUrl} />
                                       </div>
                                        <Card.Text>
                                            Price: {millify(currency.price)}
                                        </Card.Text>
                                        <Card.Text>
                                            Market Cap: {millify(currency.marketCap)}
                                        </Card.Text>
                                        <Card.Text>
                                            Daily Change: {millify(currency.change)}%
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default CryptoCurrencies;