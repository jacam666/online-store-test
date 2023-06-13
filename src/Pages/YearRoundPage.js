import React from "react";
import "../ProductCard.css"
import AddToCartButton from "../components/AddToCartButton";
import Logo from "../components/Logo";

const YearRound = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "12",
        image: "./images/Year-round-300x300.png",
        name: "YEAR ROUND IMMUNITY SUPPORT 60 caps",
        price: 19.99,
        description: [
            "Year Round is a high strength immunity support,",
            <br />,
            "this can be taken all year round to help boost immunity",
            <br />,
            "and fight off colds and viruses.",
        ],
        servings: "60 caps",
    };

    return (
        <div className="product-card">
            <Logo />
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

export default YearRound;
