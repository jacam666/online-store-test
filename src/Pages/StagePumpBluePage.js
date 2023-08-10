import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const StagePumpBlue = ({ productItem, handleAddProduct }) => {
    const product = {
        image: "/images/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
        name: "STAGE PUMP BLUE RASPBERRY FLAVOUR",
        price: 29.99,
        flavour: "Blue Raspberry",
        description: [
            "Stage Pump is a pre-workout supplement that delivers amazing pumps, focus, and vascularity. It contains ingredients such as citrulline malate, arginine AKG, and beta-alanine that enhance blood flow, oxygen delivery, and muscle endurance. It has a refreshing flavour and mixes well with water. You can take Stage Pump before your workout or before your competition to achieve a full and vascular look.",
        ],
        directions:
            "MIX ONE SCOOP (20G) WITH 250ML OF CHILLED WATER. STIR OR SHAKE VIGOROUSLY FOR 30 SECONDS USING A SHAKER. FOR ACCURATE MEASURE PLEASE REVERT TO WEIGHING SCALES USING THE SCOOP PROVIDED. CONSUME 30 MINUTES BEFORE INTENSE EXERCISE.",
        servings: "20 Servings.",
    };

    return (
        <div>
            <div className="product-card">
                <div className="product-container">
                    <div className="product-image-container">
                        <div className="name-and-bullet-container">
                            <h2 className="product-name">{product.name}</h2>
                            <div className="bullet-points-container" >
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">3500g of L-Arginine Alpha Ketoglutarite per 35g serving</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">3500mg of Beta-Alanine </p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">3500mg of L-Citrulline per 35g serving </p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">3500mg Beetroot powder (Beta Vulgaris) </p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">2000mg of Creatine Hydrochloride(22% Caffeine) </p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">1000g L-Taurine per 35g serving</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">500g of L-Tyrosine per 35g serving</p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="product-card-image"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    <div className="product-card-info">
                        <div className="product-flavour flavour-blue-raspberry">
                            <p>{product.flavour}</p>
                        </div>
                        <div className="product-price">
                            <p>Price: {product.price}</p>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>
                        <div className="servings-info">

                            <p>{product.servings}</p>
                        </div>
                        <div className="product-advice">
                            <p>{product.advice}</p>
                        </div>
                        <div className="product-storage">
                            <p>{product.storage}</p>
                        </div>

                        <p className="product-ingredient">{product.ingredients}</p>
                    </div>
                    <AddToCartButton
                        handleAddProduct={handleAddProduct}
                        productItem={product}
                    />
                </div>
            </div>
        </div>
    );
};

export default StagePumpBlue;
