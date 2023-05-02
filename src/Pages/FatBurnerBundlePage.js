import React from "react";
import ProductCard from "../components/ProductCard.js";

function FatBurnerBundle() {
    const product = {
        image: "./images/STAGE-RIPPED-NO-HUNGER-300x300.png",
        name: "FAT BURNER BUNDLE DEAL",
        price: "£44.99",
        description: [
            "",
        ],
        options: {
            
        },
    };

    return <ProductCard product={product} />;
}

export default FatBurnerBundle;
