import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-around align-items-center second-section">
                <div className="list-items">
                    <ul>
                        <li> <NavLink to='/home'>Home</NavLink></li>
                        <li> <NavLink to='/exchanges'>Exchanges</NavLink></li>
                        <li> <NavLink to='/cryptocurrencies'>Crypto Currencies</NavLink></li>
                        <li> <NavLink to='/news'>News</NavLink></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className="text-center">Contact Us</li>
                        <li><i class="fas fa-phone"></i>  +88018942323324</li>
                        <li><i class="fas fa-envelope-open"></i>  cryptoworld@hotmail.com</li>
                        <li><i class="fas fa-address-card"></i>  19 No. Essential Tower, Bangladesh</li>
                    </ul>

                </div>
                <div className="subscribe">
                    <Form className="">
                        <FormControl
                            type="search"
                            placeholder="Subscribe"
                            className="mb-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Subscribe</Button>
                    </Form>
                </div>
            </div>
            <div className="copyright-text" >
                <p>Copyright ©2021 All rights reserved | This Project is Done By Rahat</p>
            </div>
        </div>
    );
};

export default Footer;