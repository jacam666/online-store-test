/*import React from 'react'
import "../components/Footer.css"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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

*/

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/uksnc' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://twitter.com/SNC52678131' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='https://www.instagram.com/snc_supplements_/' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-2" />
                                UKSNC Supplements
                            </h6>
                            <p>
                            SNC SUPPLEMENTS has been established since 2017 The products we produce are designed and used by experienced Bodybuilders. We aim at producing the highest quality products.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Protein
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pre-Workouts
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    FatLoss
                                </a>
                            </p>
                        </MDBCol>
{/*
                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Settings
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Orders
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
                        </MDBCol>

    */}

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Moorings, Watling Street, Hockliffe, Leighton Buzzard LU7 9NB
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                hello@uksnc.co.uk
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> 01525 211127
                            </p>
                            
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    CAMDesigns.com
                </a>
            </div>
        </MDBFooter>
    );
}