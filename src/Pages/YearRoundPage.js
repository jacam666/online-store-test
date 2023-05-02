import React from "react";
import ProductCard from "../components/ProductCard.js";

function YearRound() {
    const product = {
        image: "./images/Year-round-300x300.png",
        name: "YEAR ROUND IMMUNITY SUPPORT 60 caps",
        price: "£19.99",
        description: [
            "Year Round is a high strength immunity support,",
            <br />,
            "this can be taken all year round to help boost immunity",
            <br />,
            "and fight off colds and viruses.",
        ],
        options: {
            servings:"60 caps",
        },
    };

    /*return <ProductCard product={product} />; */
    return (
        <ProductCard product={product}>
            <div className="servings">{product.options.servings}</div>
        </ProductCard>
    );
}

export default YearRound;
