import React from "react";
import { Link } from "react-router-dom";
//import data from "../components/back/Data/Data";
import homepageStudio from "../components/images/HomePageImages/homepage-studio-image.jpg";
import sncproducts from "../components/images/snc-products.jpg";
import sncDisplayImage from "../components/images/homepage-snc-display-image.jpg";
import FatLossImages from "../components/images/HomePageImages/homepage-fatloss-image.jpg";
import afterTrainDisplayImage from "../components/CarouselImages/CarouselAfterTrain.jpg";
import b4Extreme from "../components/CarouselImages/CarouselB4Extreme.jpg";
import "../HomePage.css";

function HomePage() {
  return (
    <div>
      <div className="homepage-body">
        <div className="homePage-product-cards-container">
          <div>
            <img
              className="homepage-snc-products"
              src={sncproducts}
              alt="supplements"
            />
            <div className="protein-product-card-container">
              <div className="image-container">
                <img
                  className="homePage-image"
                  src={afterTrainDisplayImage}
                  alt="protein"
                />
                <Link to= "/ProteinCataloguePage">
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
                <div className="text-overlay">
                  <p className="image-text">Shop Fat Loss Products</p>
                </div>
              </div>
            </div>
            <div className="wellbeing-product-card-container">
              <div className="image-container">
                <img
                  className="wellbeing-homePage-image"
                  src={sncDisplayImage}
                  alt="protein"
                />
                <div className="text-overlay">
                  <p className="image-text">Shop Wellbeing Products</p>
                </div>
              </div>
            </div>
            <div className="diet-product-card-container">
              <div className="image-container">
                <img
                  className="homePage-studio-image"
                  src={homepageStudio}
                  alt="diet"
                />
                <Link to= "/TheStudioPage">
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
}

export default HomePage;
