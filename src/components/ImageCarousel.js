import React, { useState, useEffect } from 'react';
import "../components/CarouselImages.css"
import image1 from "../components/CarouselImages/CarouselfullRange.jpg"
import image2 from "../components/CarouselImages/CarouselAfterTrain.jpg"
import image3 from "../components/CarouselImages/CarouselB4Extreme.jpg"
import image4 from "../components/CarouselImages/CarouselOnlyWheyPromotion.jpg"

const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const imageCarouselInnerStyle = {
        display: 'flex',
        width: `${images.length * 100}%`,
        transition: 'transform 1.5s ease-in-out',
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
