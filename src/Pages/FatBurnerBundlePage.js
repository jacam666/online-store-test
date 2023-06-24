import React from "react";
import AddToCartButton from "../components/AddToCartButton";

const FatBurnerBundle = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "22",
        image: "./images/STAGE-RIPPED-NO-HUNGER-300x300.png",
        name: "FAT BURNER BUNDLE DEAL",
        price: 44.99,
        description: [
            "Staged Ripped together with No More Hunger!",
        ],
        options: {

        },
    };

    return (
        <div className="product-card">
            <div className="product-container">
            <h2 className="product-name">{product.name}</h2>
                <div className="product-image-container">
                <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.name}
                />
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
            
        </div>
    );
}

export default FatBurnerBundle;
