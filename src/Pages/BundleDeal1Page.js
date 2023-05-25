import React from "react";
import AddToCartButton from "../components/AddToCartButton";

const BundleDeal1 = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "21",
        image: "./images/after-adv-and-b4-bundle-300x300.png",
        name: "BUNDLE DEAL 1",
        price: 59.99,
        description: [
            "After Train Advanced together with B4 Extreme.",
        ],
        options: {

        },
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
                    <p>{product.servings}</p>
                </div>
                <div className="product-directions">
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
    );
}

export default BundleDeal1;
