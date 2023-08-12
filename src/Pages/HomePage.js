import React from 'react';
import Card from 'react-bootstrap/Card';
import '../HomePage.css'
import HomePageBanner from '../components/images/HomePageImages/snc-products-3.jpg'
import AfterTrainImage from '../components/CarouselImages/CarouselAfterTrain.jpg'
import B4ExtremeImage from '../components/CarouselImages/CarouselB4Extreme.jpg'
//import ProductBanner from '../components/images/HomePageImages/homepage-snc-display-image3.jpg'
import studioImage from '../components/StudioImages/homepage-studio-image-3.jpg'


function HomePage() {
  return (
    <>

      <div className="row">
        <div className="col-12 col-md-6">
          <Card>
            <Card.Img variant="bottom" src={HomePageBanner} />
            <Card.Body>
              <Card.Text className='homepage-text'>
                <p className='mb-0'>
                  <span className='homepage-heading'>SNC Supplements</span> are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
        <div className='col-12 col-md-6'>
          <Card>
            <Card.Img variant="bottom" src={AfterTrainImage} />
            <Card.Body>
              <Card.Text className='homepage-text'>
                <p className='mb-0'>
                  <span className='homepage-heading'>After Train: </span>A post-workout formula that contains, whey protein isolate, creatine monohydrate, glutamine and other ingredients to replenish your muscles, restore your glycogen and support your recovery.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/*<br />*/}
      <div className="row">
        <div className="col-12 col-md-6">
          <Card>
            <Card.Img variant="bottom" src={B4ExtremeImage} />
            <Card.Body>
              <Card.Text className='homepage-text'>
                <p className='mb-0'>
                  <span className='homepage-heading'>B4 Train:</span> A pre-workout formula that contains caffeine, beta-alanine, citrulline malate and other ingredients to enhance your energy, focus, pump and endurance.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="col-12 col-md-6">
          <Card>
            <Card.Img variant="bottom" src={studioImage} className='custom-card-image' />
            <Card.Body>
              <Card.Text className='homepage-text'>
                <p className='mb-0'>
                <span className='homepage-heading'>Are</span> you looking for somewhere you can achieve your fitness goals? Whether you want to lose weight, build muscle or improve your endurance then check out SNC Studio.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div >
    </>
  );
}
/*



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
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <img
            src={AfterTrainImage}
            alt="protein"
            className="img-fluid"
          />
          <img
                        src='/images/13759 copy.png'
                        alt="snc text"
                        className="img-fluid"
          />
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
        <div className="col-12 col-md-6 mt-2 mt-md-0">
        <img
            src={ProductBanner}
            alt="products"
            className="img-fluid"
          />
          {/*<img
            src='/images/13759 copy b4 train.png'
            alt="b4 train text"
            className="img-fluid"
/>
        </div>
      </div>
      {/*<div className="row">
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
*/
export default HomePage;

