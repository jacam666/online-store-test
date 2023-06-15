import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import Logo from "../components/Logo";

const StagePumpStrawberry = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "14",
        image: "./images/cap-stagepump-strawberry-lime-300x300.png",
        name: "STAGE PUMP STRAWBERRY AND LIME FLAVOUR",
        price: 29.99,
        description:
            "STAGE PUMP IS SPECIALLY FORMULATED TO GIVE MIND BLOWING PUMPS, FOCUS AND INCREASED VASCULARITY.",
        directions:
            "DIRECTIONS OF USE: MIX ONE SCOOP (20G) WITH 250ML OF CHILLED WATER. STIR OR SHAKE VIGOROUSLY FOR 30 SECONDS USING A SHAKER. FOR ACCURATE MEASURE PLEASE REVERT TO WEIGHING SCALES USING THE SCOOP PROVIDED. CONSUME 30 MINUTES BEFORE INTENSE EXERCISE.",
        servings: "20 servings.",
        storage: "CLOSE TUB AFTER USE AND STORE IN A COOL DRY PLACE.",
    };

    return (
        <div className="product-card">
            <Logo />
            <div className="product-container">
                <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.name}
                />
                <h2 className="product-name">{product.name}</h2>
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
                    <h1>Storage:</h1>
                    <p>{product.storage}</p>
                </div>

                <p className="product-ingredient">{product.ingredients}</p>
            </div>
            <AddToCartButton
                handleAddProduct={handleAddProduct}
                productItem={product}
            />
        </div>
    );
}

export default StagePumpStrawberry;
