import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import Logo from "../components/Logo";

const Contest = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "17",
        image: "./images/PCT-NEW-300x300.png",
        name: "CON-TEST P.C.T 240 caps",
        price: 29.99,
        description:
            "CON-TEST P.C.T HAS BEEN SPECIALLY FORMULATED TO INCREASE NATURAL TESTOSTERONE, REDUCE ESTROGEN AND INHIBIT CORTISOL. MAXIMIZING NATURAL TESTOSTERONE WILL IMPROVE PERFORMANCE, OVERALL WELL BEING AND ELEVATE SEX DRIVE.",
        ingredients: [
            "D-ASPARTIC ACID 1400MG,",
            <br />,
            "CONJUGATED LINOLEIC ACID 700MG",
            <br />,
            "BULBINE NATALENSIS 300MG",
            <br />,
            "MUCCUNA PRURIENS 250MG",
            <br />,
            "ASHWAGANDHA ROOT EXTRACT 200MG",
            <br />,
            "LIQUORICE ROOT EXTRACT 150MG",
            <br />,
            "TONGKAT ALI EXTRACT 150MG",
            <br />,
            "FENUGREEK SEED EXTRACT 100MG",
            <br />,
            "AVENA SATIVA (DERIVED FROM OATS) 100MG",
            <br />,
            "RHODIOLA ROSEA ROOT EXTRACT 100MG",
            <br />,
            "BIOPERINE 5MG.",
        ],
        servings: "240 caps",
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
                    <p>{product.directions}</p>
                </div>
                <div className="product-advice">
                    <p>{product.advice}</p>
                </div>
                <div className="product-storage">
                    <p>{product.storage}</p>
                </div>
                <div className="product-ingredient">
                <h1>Ingredients:</h1>
                <p>{product.ingredients}</p>
                </div>
                
            </div>
            <AddToCartButton
                handleAddProduct={handleAddProduct}
                productItem={product}
            />
        </div>
    );
};

export default Contest;
