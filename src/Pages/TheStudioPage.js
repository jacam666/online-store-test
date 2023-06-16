import React from 'react'
import "../TheStudio.css"
import StudioCarousel from '../components/StudioCarousel'

function TheStudioPage() {
    return (
        <div className='studio-container'>
            <div>
                <h1 className='studio-heading'>SNC Studio</h1>
            </div>
            <StudioCarousel />
            <div className='studio-descriptions'>
                <p className='studio-description-section-1'>
                    Are you looking for a personal trainer that can help you achieve your goals in a comfortable and private environment?
                </p>
                <div className='studio-description-section-2'>
                    Do you want to train with a bodybuilder and competitor who has won multiple competitions, is a level 4 nutritional coach and has 30 years of experience in the industry?
                </div>
                <div className='studio-description-section-3'>
                    If so, then you have come to the right place. Welcome to Snc Studio, where we offer one-to-one and group sessions with Mark Etherdon, a certified personal trainer and a successful bodybuilder.
                </div>
                <div className='studio-description-section-4'>
                    Our Studio is equipped with air conditioning and state-of-the-art equipment. Whether you want to lose weight, gain muscle, improve your health, or prepare for a competition, we have the program for you.
                </div>
                <p className='studio-description-section-5'>
                    Contact us today and book your free consultation with Mark Etherdon. You won’t regret it!
                </p>
            </div>

        </div>


    )
}

export default TheStudioPage