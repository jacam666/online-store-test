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
                </Link>
                <header>THE ONLY WHEY 2.2KG 74 servings</header>
                <p className="price">£39.99</p>
                {/*<div className="basketChoice">
                    <input
                        className="amountChoice"
                        type="number"
                        min="1"
                        max="10"
                        value="1"
                    />
                    <button className="addToBasket" onClick="addToBasket()">
                        Add to basket
    </button>
    </div>*/}
            </div>
            <div className="card" id="after-train1">
                <Link to="/AfterTrainPage">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/1After_Train_Fruit_Punch-1-300x300.png"}
                    />
                </Link>
                <header>AFTER TRAIN FRUIT PUNCH POST WORKOUT</header>
                <p className="price">£39.99</p>
            </div>
            <div className="card" id="after-train2">
                <Link to="/AfterTrainPage">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/2After_Train_Raspberry-1-300x300.png"}
                    />
                </Link>
                <header>AFTER TRAIN RASPBERRY POST WORKOUT</header>
                <p className="price">£39.99</p>
            </div>
            <div className="card" id="after-train3">
                <Link to="/AfterTrainPage">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/3After_Train_Orange-1-300x300.png"}
                    />
                </Link>
                <header>AFTER TRAIN ORANGE POST WORKOUT</header>
                <p className="price">£39.99</p>
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
                <header>Stage Ripped</header>
                <p className="price">£39.99</p>
                </div>

                <div className="card">
                    <Link to="/AfterTrainAdvancedPage">
                        <img
                            className="cardImage"
                            alt={"protein"}
                            src={"./images/AFTER-TRAIN-ADVANCED-300x300.png"}
                        />
                    </Link>
                    <header>After Train Advanced</header>
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
                    <header>AFTER TRAIN RASPBERRY POST WORKOUT</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <Link to="/B4ExtremePage">
                        <img
                            className="cardImage"
                            alt={"protein"}
                            src={"./images/b4-candy-extreme-300x300.png"}
                        />
                    </Link>
                    <header>B4 Extreme</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card" id="b4-train">
                    <Link to="/B4TrainPage">
                        <img
                            className="cardImage"
                            alt={"protein"}
                            src={"./images/B4-Rio-berry-300x300.png"}
                        />
                    </Link>
                    <header>B4-Rio</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card" id="b4-train">
                    <Link to="/B4TrainGummyPage">
                        <img
                            className="cardImage"
                            alt={"protein"}
                            src={"./images/B4-tropical-gummy-300x300.png"}
                        />
                    </Link>
                    <header>B4 Tropical</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/Year-round-300x300.png"}
                    />
                    <header>Year Round</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/cap-b4pre-blue-300x300.png"}
                    />
                    <header>B4 Extreme</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/cap-stagepump-strawberry-lime-300x300.png"}
                    />
                    <header>StagePump</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/NO-HUNGER-300x300.png"}
                    />
                    <header>No Hunger</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/orange-mango-advanced-aftertrain-for-web-300x300.png"}
                    />
                    <header>After Train Advanced</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/PCT-NEW-300x300.png"}
                    />
                    <header>PCT</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/RIPPED-EXTREME-300x300.png"}
                    />
                    <header>Ripped Extreme</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/STAGE-PUMP-BLUE-FOR-WEB-300x300.png"}
                    />
                    <header>Stage Pump</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/620-620-traininngplan-1-300x300.jpg"}
                    />
                    <header>Training Plan</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/after-adv-and-b4-bundle-300x300.png"}
                    />
                    <header>Bundle-1</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/STAGE-RIPPED-NO-HUNGER-300x300.png"}
                    />
                    <header>Bundle-2</header>
                    <p className="price">£39.99</p>
                </div>
                <div className="card">
                    <img
                        className="cardImage"
                        alt={"protein"}
                        src={"./images/BUNDLE-2-FINAL.png"}
                    />
                    <header>Bundle-3</header>
                    <p className="price">£39.99</p>
                </div>
            </div>
            );
};

            export default Card;
