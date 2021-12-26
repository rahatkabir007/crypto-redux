import React from 'react';
import "./NotFound.css";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import error from '../../images/error-banner.png';

const NotFound = () => {
    return (
        <div className="error-container m-5">
            <div class="wrap">
                <div class="main2">
                    <div class="banner">
                        <img src={error} alt="" />
                    </div>
                    <div class="text">
                        <h1 id="error-head">The requested url was not found !...</h1>
                        <p id="error-para">Sorry!Evidently the document you were looking for has either been moved or no longer exist,,</p>
                        
                    </div>
                </div>

            </div>
            <div className="text-center p-4">
                <NavLink to="/home"> <Button variant="outline-dark">Redirect To Home Page</Button></NavLink>
            </div>
        </div>
    );
};

export default NotFound;