import React from "react";
import AddToCartButton from "../components/AddToCartButton";

const StagePumpBlue = ({ productItem, handleAddProduct }) => {
    const product = {
        image: "./images/STAGE-PUMP-BLUE-FOR-WEB-300x300.png",
        name: "STAGE PUMP BLUE RASPBERRY FLAVOUR",
        price: 29.99,
        description: [
            "STAGE PUMP IS SPECIALLY FORMULATED TO GIVE MIND BLOWING PUMPS, FOCUS AND INCREASED VASCULARITY.",
        ],
        directions:
            "MIX ONE SCOOP (20G) WITH 250ML OF CHILLED WATER. STIR OR SHAKE VIGOROUSLY FOR 30 SECONDS USING A SHAKER. FOR ACCURATE MEASURE PLEASE REVERT TO WEIGHING SCALES USING THE SCOOP PROVIDED. CONSUME 30 MINUTES BEFORE INTENSE EXERCISE.",
        servings: "20 Servings.",
    };

    return (
        <div className="product-card">
            <div className="product-container">
            <h2 className="product-name">{product.name}</h2>
                <div className="product-image-container">
                <img
                    className="stage-pump-product-card-image"
                    src={product.image}
                    alt={product.name}
                />
                <img className="stage-pump-product-card-image-2" src="images\stage-pump-nutri-info.jpeg" alt="pre-workout" />
                </div>
                
                <div className="product-card-info">
                <div className="product-price">
                    <p>Price: {product.price}</p>
                </div>

                <div className="product-description">
                    <h1>Description:</h1>
                    <p>{product.description}</p>
                </div>
                <div className="servings-info">
                    <h1>Servings:</h1>
                    <p>{product.servings}</p>
                </div>
                <div className="product-directions">
                    <h1>Directions:</h1>
                    <p>{product.directions}</p>
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
    );
};

export default StagePumpBlue;
