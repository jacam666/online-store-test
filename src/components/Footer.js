import React from 'react'
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='connect'>
                <div className='connect-header'></div>
                <div>
                    <ul className='connect-links'>
                        <li className='facebook-link'>
                            <a href="https://www.facebook.com/uksnc">
                                <FaFacebook />
                            </a>
                        </li>
                        <li className='instagram-link'>
                            <a href="https://www.instagram.com/snc_supplements_/">
                                <FaInstagram />
                            </a>
                        </li>
                        <li className='twitter-link'>
                            <a href="https://twitter.com/SNC52678131">
                                <FaTwitter />
                            </a>
                        </li>
                        <li className='footer-contact'>
                            <Link to="/ContactPage">Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;