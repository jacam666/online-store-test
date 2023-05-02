import React from "react";
import ProductCard from "../components/ProductCard.js";

function BundleDeal1() {
    const product = {
        image: "./images/after-adv-and-b4-bundle-300x300.png",
        name: "BUNDLE DEAL 1",
        price: "£59.99",
        description: [
            "",
        ],
        options: {
            
        },
    };

    return <ProductCard product={product} />;
}

export default BundleDeal1;
