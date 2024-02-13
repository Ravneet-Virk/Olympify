import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container">

                <div className="row">
                    <div className="footer-col-1">
                        <div className="app-logo">
                            <img src="/Images/Logo 2.png" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/Images/Logo 1.png" />
                        <p>Promote, inform, and celebrate the Olympic Games, athletes, and their achievements to a global audience.</p>
                    </div>
                    <div className="footer-col-3">
                        <h5>Olympic Games</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Sports">Sports</a></li>
                            <li><a href="/Event">Events</a></li>
                            <li><a href="/About Us">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h5>Follow Us</h5>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>

                {/* Row finished */}
                <hr />
                <p className="copyright">Copyright 2023 - Olympify Data Abalysis Hub</p>
            </div>
        </div>
    )
}

export default Footer
