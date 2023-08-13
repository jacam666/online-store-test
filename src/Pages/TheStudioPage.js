import React from 'react'
import StudioCarousel from '../components/StudioCarousel'
import image9 from "../components/StudioImages/studioPic9.jpg"
import imageText1 from "../components/StudioImages/13759 copy studioimage1.png"
import imageText2 from "../components/StudioImages/13759 copy studioimage2.png"
import imageText3 from "../components/StudioImages/13759 copy studioimage3.png"
import imageText4 from "../components/StudioImages/13759 copy studioimage4.png"
import imageText5 from "../components/StudioImages/13759 copy studioimage5.png"
import Card from 'react-bootstrap/Card'

function TheStudioPage() {
    return (
        <div className='studio-container'>
                <StudioCarousel />
                <div>
                    <h1 className='studio-heading'>SNC Studio</h1>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                            <Card.Img src={imageText1} />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Card.Img src={imageText2} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <Card.Img src={imageText3} />
                    </div>
                    <div className='col-12 col-md-6'>
                        <Card.Img src={imageText4} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <Card.Img src={imageText5} className='studio-image-5' />
                    </div>
                    <div className='col-12 col-md-6'>
                    <img className='studio-image-9' src={image9} alt='personal-training' />
                    </div>
                </div>
                
        </div>
    )
}

export default TheStudioPage