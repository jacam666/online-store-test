import React from 'react'
import "../components/contact.css"

const ContactPage = () => {
    return (
        <div>
            <div className='contact-container'>
            
            <div className='contact-address'>
                <h2 className='contact-heading'>Contact Us:</h2>
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

export default ContactPage