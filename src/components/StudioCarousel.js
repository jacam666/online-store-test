import React, { useState, useEffect } from 'react';
import "../TheStudio.css"
import image1 from "../components/StudioImages/studioPic1.jpg"
import image2 from "../components/StudioImages/studioPic2.jpg"
import image3 from "../components/StudioImages/studioPic3.jpg"
import image4 from "../components/StudioImages/studioPic4.jpg"
import image5 from "../components/StudioImages/studioPic5.jpg"
import image6 from "../components/StudioImages/studioPic6.jpg"
import image7 from "../components/StudioImages/studioPic7.jpg"
import image8 from "../components/StudioImages/studioPic8.jpg"
//import image9 from "../components/StudioImages/studioPic9.jpg"

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const StudioCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="studio-carousel-container">
            <img className="studio-carousel-image" src={images[currentImageIndex]} alt="Studio" />
        </div>
    );



};
export default StudioCarousel;

