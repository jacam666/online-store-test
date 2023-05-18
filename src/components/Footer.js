import React from 'react'
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='connect'>
                <div className='connect-header'></div>
                <div>
                    <ul className='connect-links'>
                        <li className='facebook-link'>
                            {/*<a href="https://www.facebook.com/uksnc">Visit UKSNC on Facebook   f09a</a>*/}
                            <a href="https://www.facebook.com/uksnc">
                                {/*<FontAwesomeIcon icon={FaFacebook} />*/}
                                <FaFacebook />
                                </a>
                        </li>
                        <li className='instagram-link'>
                            <a href="https://www.facebook.com/uksnc">
                                <FaInstagram />
                                </a>
                        </li>
                        <li className='twitter-link'>
                            <a href="https://www.facebook.com/uksnc">
                                <FaTwitter />
                                </a>
                        </li>
                        <li className='footer-contact'>
                            <h2>Contact us</h2>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;