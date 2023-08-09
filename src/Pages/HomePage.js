import React from 'react';
import '../HomePage.css'
import HomePageBanner from '../components/images/HomePageImages/CarouselfullRange.jpg'
//import SncDescriptionImage from '../images/13759 copy.png" alt="description'
import AfterTrainImage from '../components/CarouselImages/CarouselAfterTrain.jpg'
//import AfterTrainText from '../Images/13759 copy after train.png'
import B4ExtremeImage from '../components/CarouselImages/CarouselB4Extreme.jpg'
//import B4ExtremeText from '../Images/13759 copy b4 train.png'
import ProductBanner from '../components/images/HomePageImages/homepage-snc-display-image3.jpg'
//import StageRippedText from '../Images/13759 copy staged ripped.png'





function HomePage() {
  return (
    <div className="homepage-container">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={HomePageBanner}
            alt="home page banner"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <img
                        src='/images/13759 copy.png'
                        alt="snc text"
                        className="img-fluid"
    />
          {/*<h4 className='text-center  fw-light homepage-text'>SNC Supplements are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,
            lose fat, improve performance or boost your immune system.
  </h4>*/}
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={AfterTrainImage}
            alt="protein"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 ">
          <img
            src='/images/13759 copy after train.png'
            alt="after train text"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={B4ExtremeImage}
            alt="b4 extreme"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <img
            src='/images/13759 copy b4 train.png'
            alt="b4 train text"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src={ProductBanner}
            alt="products"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6">
          <img
            src='/images/13759 copy staged ripped.png'
            alt="stage ripped text"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

