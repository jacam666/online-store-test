import React from 'react';
import Card from 'react-bootstrap/Card';
import '../HomePage.css'
import HomePageBanner from '../components/images/HomePageImages/snc-products-3.jpg'
import AfterTrainImage from '../components/CarouselImages/CarouselAfterTrain.jpg'
import B4ExtremeImage from '../components/CarouselImages/CarouselB4Extreme.jpg'
import studioImage from '../components/StudioImages/homepage-studio-image-3.jpg'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <Card>
            <Link to='/ProteinCataloguePage'>
            <Card.Img variant="bottom" src={HomePageBanner} />
            </Link>
            <Card.Body>
              <Card.Text className='homepage-text'>
                  <span className='homepage-heading'>SNC Supplements</span> are a range of products designed to help you achieve your fitness goals, whether you want to build muscle,lose fat, improve performance or boost your immune system.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-12 col-md-6'>
          <Card>
            <Link to='/ProteinCataloguePage'>
            <Card.Img variant="bottom" src={AfterTrainImage} />
            </Link>
            <Card.Body>
              <Card.Text className='homepage-text mb-0'>
                  <span className='homepage-heading'>After Train: </span>A post-workout formula that contains, whey protein isolate, creatine monohydrate, glutamine and other ingredients to replenish your muscles, restore your glycogen and support your recovery.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/*<br />*/}
      <div className="row">
        <div className="col-12 col-md-6">
          <Card>
            <Link to='/PreWorkoutCataloguePage'>
            <Card.Img variant="bottom" src={B4ExtremeImage} />
            </Link>
            <Card.Body>
              <Card.Text className='homepage-text'>
                  <span className='homepage-heading'>B4 Train:</span> A pre-workout formula that contains caffeine, beta-alanine, citrulline malate and other ingredients to enhance your energy, focus, pump and endurance.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <br />
        <div className="col-12 col-md-6">
          <Card>
            <Link to='/TheStudioPage'>
            <Card.Img variant="bottom" src={studioImage} className='custom-card-image' />
            </Link>
            <Card.Body>
              <Card.Text className='homepage-text'>
                <span className='homepage-heading'>Are</span> you looking for somewhere you can achieve your fitness goals? Whether you want to lose weight, build muscle or improve your endurance then check out SNC Studio.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div >
    </>
  );
}
export default HomePage;

