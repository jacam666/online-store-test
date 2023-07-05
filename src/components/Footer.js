/*import React from 'react'
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
*/

import React from 'react'
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
//import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div>
            <h1 className='connect-header'>Connect With Us</h1>

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
                    {/*<li className='footer-contact'>
                        <Link to="/ContactPage">Contact Us
                        </Link>
    </li>*/}
                </ul>
            </div>
            <div className='contact-container'>
            
                <div className='contact-address'>
                    <h2 className='contact-heading'>Shop Address:</h2>
                    <p>
                        Moorings,<br />
                        Watling Street,<br />
                        Hockliffe,<br />
                        Leighton Buzzard<br />
                        LU7 9NB<br />
                        <br />
                    </p>
                    <div className='contact-phone-email' >
                        Tel: 01525 211127<br />
                        Email: hello@uksnc.co.uk
                    </div>
                </div>
                <iframe className='contact-map'
                    src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=LU7%209NB+(uksnc%20supplements)&amp;ie=UTF8&amp;t=&amp;z=10&amp;
            iwloc=B&amp;output=embed"
                    title='Google Maps Location'
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                ></iframe>
            </div>
        </div>
    )
}

export default Footer