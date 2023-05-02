import React from "react";
import ProductCard from "../components/ProductCard.js";

function BundleDeal2() {
    const product = {
        image: "./images/BUNDLE-2-FINAL.png",
        name: "BUNDLE DEAL 2",
        price: "£44.99",
        description: [
            "",
        ],
        options: {
            
        },
    };

    return <ProductCard product={product} />;
}

export default BundleDeal2;
