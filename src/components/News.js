import React, { useEffect, useState } from 'react';
import moment from 'moment';
import img from '../images/crypto-logo.png';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './News.css';

const News = ({simplified}) => {
   
    const [cryptoNews, setCryptoNews] = useState([]);
    useEffect(() => {
        fetch('https://stark-falls-22650.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setCryptoNews(data[0].results));
    }, [])

    if (!cryptoNews?.length) return (<div className='w-50 text-center mx-auto my-3 spinners-section'><Spinner animation="grow" /></div>);
    return (
        <Container>
            {
                simplified ? <Row className='crypto-card-container mb-5 py-3'>
                    {cryptoNews?.slice(0,4).map((news) => (
                        <Col xs={12} sm={12} lg={3} className='crypto-card'id="news" key={news.id}>
                            <a href={news.link} target='_blank' rel="noreferrer">
                                <Card className='news-card h-100'>
                                    <Card.Img variant="top" src={news.image_url ? news.image_url : img}/>
                                    <Card.Body>
                                        <Card.Title>{news.title}</Card.Title>
                                        <Card.Text>
                                            {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>{moment(news.pubDate).startOf('ss').fromNow()}</Card.Text>
                                        <Card.Text style={{textTransform: 'capitalize'}}>{news.source_id}</Card.Text>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row> : <Row className='crypto-card-container mb-5 py-3'>
                    {cryptoNews?.map((news) => (
                        <Col xs={12} sm={12} lg={3} className='crypto-card my-2' id="news" key={news.id}>
                            <a href={news.link} target='_blank' rel="noreferrer">
                                <Card className='news-card h-100'>
                                    <Card.Img variant="top" src={news.image_url ? news.image_url : img} />
                                    <Card.Body>
                                        <Card.Title>{news.title}</Card.Title>
                                        <Card.Text>
                                            {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>{moment(news.pubDate).startOf('ss').fromNow()}</Card.Text>
                                        <Card.Text>{news.source_id}</Card.Text>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
           }
        </Container>
    );
};

export default News;