import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }
    
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#f7941abd',
                borderColor: '#f7941abd',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className="chart-header">
                <h1 className="chart-title">{coinName} Price Chart </h1>
                <Col className="price-container">
                    <h1 className="price-change">Change: {coinHistory?.data?.change}%</h1>
                    <h1 className="current-price">Current {coinName} Price: $ {currentPrice}</h1>
                </Col>
            </Row>
            <Line data={data} options={options}></Line>
            
        </>
    );
};

export default LineChart;
