import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import Logo from "../components/Logo";

const BundleDeal2 = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "23",
        image: "./images/BUNDLE-2-FINAL.png",
        name: "BUNDLE DEAL 2",
        price: 44.99,
        description: "Stage Ripped together with B4 Train",
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

export default BundleDeal2;
