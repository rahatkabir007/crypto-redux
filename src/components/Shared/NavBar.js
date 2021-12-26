import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/crypto-logo.png';
import './Navbar.css';

const NavBar = () => {
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" className="navbar">
                <Container>
                   <div className='logo-area'>
                        <img src={logo} alt="" />
                        <NavLink to="/home">Crypto World</NavLink>
                   </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-links">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/exchanges">Exchanges</NavLink>
                            <NavLink to="/cryptocurrencies">Crypto Currencies</NavLink>
                            <NavLink to="/news">News</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;