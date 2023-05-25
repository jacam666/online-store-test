import React from "react";
import AddToCartButton from "../components/AddToCartButton";


const StageExtreme = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "18",
        image: "./images/RIPPED-EXTREME-300x300.png",
        name: "STAGE RIPPED EXTREME",
        price: 34.99,
        description:
            "Stage Ripped Extreme has been especially formulated to aid in maximum weight loss. Giving increased energy and suppressing appetite, for best results take on a calorie reduced diet. warning high caffeine content, use with caution.",
        servings: "60 caps",
    };

    return (
        <div className="product-card">
            <div>
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
                    <p>{product.directions}</p>
                </div>
                <div>
                    <p className="product-advice">{product.advice}</p>
                </div>
                <div>
                    <p className="product-storage">{product.storage}</p>
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

export default StageExtreme;
