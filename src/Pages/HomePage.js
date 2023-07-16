import React from "react";
//import { Link } from "react-router-dom";
//import data from "../components/back/Data/Data";
//import homepageStudio from "../components/images/HomePageImages/homepage-studio-image.jpg";
import sncproducts from "../components/images/snc-products.jpg";
import sncDisplayImage from "../components/images/homepage-snc-display-image.jpg";
//import FatLossImages from "../components/images/HomePageImages/homepage-fatloss-image.jpg";
import afterTrainDisplayImage from "../components/CarouselImages/CarouselAfterTrain.jpg";
import b4Extreme from "../components/CarouselImages/CarouselB4Extreme.jpg";
import "../HomePage.css";
import BasketIcon from "../BasketIcon";
import Footer from "../components/Footer";

function HomePage() {
  return (
    /*<div>
      <div className="homepage-body">
      <div>
            <img
              className="homepage-snc-products"
              src={sncproducts}
              alt="supplements"
            />
            <div>
        <div className="homePage-product-cards-container">
            </div>
            <div className="protein-product-card-container">
              <div className="image-container">
                <img
                  className="homePage-image"
                  src={afterTrainDisplayImage}
                  alt="protein"
                />
                <Link to="/ProteinCataloguePage">
                  <div className="text-overlay">
                    <p className="image-text">Shop Proteins</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pre-workout-product-card-container">
              <div className="image-container">
                <img
                  className="pre-workout-homePage-image"
                  src={b4Extreme}
                  alt="protein"
                />
                <Link to="/PreWorkoutCataloguePage">
                  <div className="text-overlay">
                    <p className="image-text">Shop Pre-Workouts</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="fat-loss-product-card-container">
              <div className="image-container">
                <img
                  className="fat-loss-homePage-image"
                  src={FatLossImages}
                  alt="protein"
                />
                <Link to="/FatLossCataloguePage">
                  <div className="text-overlay">
                    <p className="image-text">Shop Fat Loss Products</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="wellbeing-product-card-container">
              <div className="image-container">
                <img
                  className="wellbeing-homePage-image"
                  src={sncDisplayImage}
                  alt="protein"
                />
                <Link to="/WellBeingCataloguePage">
                  <div className="text-overlay">
                    <p className="image-text">Shop Wellbeing Products</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="diet-product-card-container">
              <div className="image-container">
                <img
                  className="homePage-studio-image"
                  src={homepageStudio}
                  alt="diet"
                />
                <Link to="/TrainingAndDietPage">
                  <div className="text-overlay">
                    <p className="image-text">Shop Training and Diet Plans</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  */
    <div>
      <BasketIcon />
      <div className="homepage-body">
        <img
          className="homepage-snc-products"
          src={sncproducts}
          alt="supplements"
        />
        <div className="homepage-info-text-image-container">
          <img className="homepage-info-text-image" src="/images/13759 copy.png" alt="description" />
        </div>
        <div className="homePage-product-cards-container">
          <div className="protein-product-card-container">
            <div className="image-container">
              <img
                className="homePage-image"
                src={afterTrainDisplayImage}
                alt="protein"
              />
              {/*<Link to="/ProteinCataloguePage">
                <div className="text-overlay">
                  <p className="image-text">Shop Proteins</p>
                </div>
  </Link>*/}
              <div className="homepage-info-text-image-container">
                <img className="homepage-info-text-image" src="/images/13759 copy after train.png" alt="description" />
              </div>

            </div>
          </div>
          <div className="pre-workout-product-card-container">
            <div className="image-container">
              <img
                className="pre-workout-homePage-image"
                src={b4Extreme}
                alt="protein"
              />
              <div className="homepage-info-text-image-container">
                <img className="homepage-b4Train-text-image" src="/images/13759 copy b4 train.png" alt="description" />
              </div>
              {/*<Link to="/PreWorkoutCataloguePage">
                <div className="text-overlay">
                  <p className="image-text">Shop Pre-Workouts</p>
                </div>
</Link>*/}
            </div>
          </div>
          {/*<div className="fat-loss-product-card-container">
            <div className="image-container">
              <img
                className="fat-loss-homePage-image"
                src={FatLossImages}
                alt="protein"
/>*/}
          {/*<Link to="/FatLossCataloguePage">
                <div className="text-overlay">
                  <p className="image-text">Shop Fat Loss Products</p>
                </div>
</Link>*/}
          {/*}  </div>
          </div>*/}


          <div className="wellbeing-product-card-container">
            <div className="image-container">
              <img
                className="wellbeing-homePage-image"
                src={sncDisplayImage}
                alt="protein"
              />
              {/*<Link to="/WellBeingCataloguePage">
                <div className="text-overlay">
                  <p className="image-text">Shop Wellbeing Products</p>
                </div>
</Link>*/}
              <div className="homepage-info-text-image-container">
                <img className="homepage-stage-ripped-text-image" src="/images/13759 copy staged ripped.png" alt="description" />
              </div>
            </div>

          </div>
          {/*<div className="diet-product-card-container">
            <div className="image-container">
              <img
                className="homePage-studio-image"
                src={homepageStudio}
                alt="diet"
/> */}
              {/*<Link to="/TrainingAndDietPage">
                <div className="text-overlay">
                  <p className="image-text">Shop Training and Diet Plans</p>
                </div>
</Link>*/}
            {/*</div>
          </div>*/}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default HomePage;
