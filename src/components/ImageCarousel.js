import React, { useState, useEffect } from 'react';
import "../components/CarouselImages.css"
/*import image1 from "../components/CarouselImages/CarouselfullRange.jpg"
import image2 from "../components/CarouselImages/CarouselAfterTrain.jpg"
import image3 from "../components/CarouselImages/CarouselB4Extreme.jpg"
import image4 from "../components/CarouselImages/CarouselOnlyWheyPromotion.jpg"
import image5 from "../components/CarouselImages/CarouselStageB4Pump.jpg"*/
import image6 from "../components/CarouselImages/FatBurnerBanner.png"
import image7 from "../components/CarouselImages/OnlyWheYBanner.png"
import image8 from "../components/CarouselImages/after_train_banner_test_01_2545px.png-1.png"
import image9 from "../components/CarouselImages/B4ExtremeBanner.png"

const images = [/*image1, image2, image3, image4, image5,*/ image6, image7, image8, image9];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const imageCarouselInnerStyle = {
        display: 'flex',
        width: `${images.length * 100}%`,
        transition: 'transform 2s ease-in-out',
        transform: `translateX(-${(currentImageIndex / images.length) * 100}%)`,

    };

    return (
        <div className="image-carousel">
            <div className="image-carousel-inner" style={imageCarouselInnerStyle}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        className={index === currentImageIndex ? 'visible' : ''}
                    />
                ))}
            </div>
        </div>
    )

};
export default ImageCarousel;

