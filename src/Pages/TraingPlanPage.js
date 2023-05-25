import React from "react";
import AddToCartButton from "../components/AddToCartButton";

const TrainingPlan = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "20",
        image: "./images/620-620-traininngplan-1-300x300.jpg",
        name: "TRAINING PLAN 1 HOUR ONLINE",
        price: 30.00,
        description: [
            "After owning a gym for 11 years with 30 years experience plus winning more than 30 top level shows I’ve pretty much seen and tried every possible workout. Whether you are just beginning or just need something different, I will draw up a training plan to suit you.",
        ],
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

export default TrainingPlan;
