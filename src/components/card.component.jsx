import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card" id="only-whey">
        <Link to="/OnlyWheyPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/only-whey-final-300x300.png"}
          />

          <header>THE ONLY WHEY 2.2KG 74 servings</header>
          <p className="price">£39.99</p>
        </Link>
      </div>

      <div className="card" id="after-train1">
        <Link to="/AfterTrainFruitPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/1After_Train_Fruit_Punch-1-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN FRUIT PUNCH POST WORKOUT</header>
        <p className="price">£24.99</p>
      </div>

      <div className="card" id="after-train2">
        <Link to="/AfterTrainBluePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/2After_Train_Raspberry-1-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN BLUE RASPBERRY POST WORKOUT</header>
        <p className="price">£24.99</p>
      </div>

      <div className="card" id="after-train3">
        <Link to="/AfterTrainOrangePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/3After_Train_Orange-1-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN ORANGE POST WORKOUT</header>
        <p className="price">£24.99</p>
      </div>

      <div className="card" id="after-train-advanced">
        <Link to="/AfterTrainAdvancedPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/advanced-aftertrain-strawberrylime-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN ADVANCED 2KG STRAWBERRY-LIME</header>
        <p className="price">£39.99</p>
      </div>

      <div className="card" id="stage-ripped">
        <Link to="/StageRippedPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/Stage-Ripped-CGI-300x300.png"}
          />
        </Link>
        <header>STAGE RIPPED 60 caps</header>
        <p className="price">£29.99</p>
      </div>

      <div className="card">
        <Link to="/AfterAdvancedBlueCandyPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/AFTER-TRAIN-ADVANCED-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN ADVANCED 2KG BLUE CANDY FLAVOUR</header>
        <p className="price">£39.99</p>
      </div>

      <div className="card" id="after-train">
        <Link to="/AfterTrainPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/apple-aftertrain-300x300.png"}
          />
        </Link>
        <header>AFTER TRAIN APPLE POST WORKOUT</header>
        <p className="price">£24.99</p>
      </div>
      <div className="card">
        <Link to="/B4ExtremePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/b4-candy-extreme-300x300.png"}
          />
        </Link>
        <header>B4 EXTREME CANDY FLAVOUR STRONG PRE WORKOUT</header>
        <p className="price">£24.99</p>
      </div>
      <div className="card" id="b4-train">
        <Link to="/B4TrainPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/B4-Rio-berry-300x300.png"}
          />
        </Link>
        <header>B4 TRAIN RIO-BERRY PRE-WORKOUT</header>
        <p className="price">£24.99</p>
      </div>
      <div className="card" id="b4-train">
        <Link to="/B4TrainGummyPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/B4-tropical-gummy-300x300.png"}
          />
        </Link>
        <header>B4 TRAIN TROPICAL GUMMY FLAVOUR PRE WORKOUT</header>
        <p className="price">£24.99</p>
      </div>

      <div className="card">
        <Link to="/YearRoundPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/Year-round-300x300.png"}
          />
        </Link>
        <header>YEAR ROUND IMMUNITY SUPPORT 60 caps </header>
        <p className="price">£19.99</p>
      </div>

      <div className="card">
        <Link to="/B4ExtremeBluePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/cap-b4pre-blue-300x300.png"}
          />
        </Link>
        <header>B4 EXTREME BLUE RASPBERRY FLAVOUR STRONG PRE-WORKOUT</header>
        <p className="price">£24.99</p>
      </div>

      <div className="card">
        <Link to="/StagePumpStrawberryPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/cap-stagepump-strawberry-lime-300x300.png"}
          />
        </Link>
        <header>STAGE PUMP STRAWBERRY AND LIME FLAVOUR</header>
        <p className="price">£29.99</p>
      </div>

      <div className="card">
        <Link to="/NoMoreHUngerPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/NO-HUNGER-300x300.png"}
          />
        </Link>
        <header>NO MORE HUNGER 90 caps</header>
        <p className="price">£24.99</p>
      </div>
      <div className="card">
        <Link to="/AfterAdvancedOrangePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={
              "./images/orange-mango-advanced-aftertrain-for-web-300x300.png"
            }
          />
        </Link>
        <header>AFTER TRAIN ADVANCED 2KG ORANGE AND MANGO</header>
        <p className="price">£39.99</p>
      </div>
      <div className="card">
        <Link to="/Con-TestPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/PCT-NEW-300x300.png"}
          />
        </Link>
        <header>CON-TEST P.C.T 240 caps</header>
        <p className="price">£29.99</p>
      </div>

      <div className="card">
        <Link to="/StageExtremePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/RIPPED-EXTREME-300x300.png"}
          />
        </Link>
        <header>STAGE RIPPED EXTREME 60 caps</header>
        <p className="price">£34.99</p>
      </div>

      <div className="card">
        <Link to="/StagePumpBluePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/STAGE-PUMP-BLUE-FOR-WEB-300x300.png"}
          />
        </Link>
        <header>STAGE PUMPED BLUE RASPBERRY FLAVOUR</header>
        <p className="price">£29.99</p>
      </div>
      <div className="card">
        <Link to="/TrainingPlanPage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/620-620-traininngplan-1-300x300.jpg"}
          />
        </Link>
        <header>TRAINING PLAN 1-HOUR ONLINE</header>
        <p className="price">£30.00</p>
      </div>
      <div className="card">
        <Link to="/BundleDeal1Page">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/after-adv-and-b4-bundle-300x300.png"}
          />
        </Link>
        <header>BUNDLE DEAL-1</header>
        <p className="price">£59.99</p>
      </div>

      <div className="card">
        <Link to="/FatBurnerBundlePage">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/STAGE-RIPPED-NO-HUNGER-300x300.png"}
          />
        </Link>
        <header>FAT BURNER BUNDLE DEAL</header>
        <p className="price">£44.99</p>
      </div>
      <div className="card">
        <Link to="/BundleDeal2Page">
          <img
            className="cardImage"
            alt={"protein"}
            src={"./images/BUNDLE-2-FINAL.png"}
          />
        </Link>
        <header>BUNDLE DEAL-2</header>
        <p className="price">£49.99</p>
      </div>
    </div>
  );
};

export default Card;
