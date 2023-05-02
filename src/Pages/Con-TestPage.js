import React from "react";
//import ProductCard from "./ProductCard.js";
import ProductCard from "../components/ProductCard.js";


function Contest() {
    const product = {
        image: "./images/PCT-NEW-300x300.png",
        name: "CON-TEST P.C.T 240 caps",
        price: "£29.99",
        description:
            "CON-TEST P.C.T HAS BEEN SPECIALLY FORMULATED TO INCREASE NATURAL TESTOSTERONE, REDUCE ESTROGEN AND INHIBIT CORTISOL. MAXIMIZING NATURAL TESTOSTERONE WILL IMPROVE PERFORMANCE, OVERALL WELL BEING AND ELEVATE SEX DRIVE.",
        options: {
            ingredients: "D-ASPARTIC ACID 1400MG, CONJUGATED LINOLEIC ACID 700MG, BULBINE NATALENSIS 300MG, MUCCUNA PRURIENS 250MG, ASHWAGANDHA ROOT EXTRACT 200MG, LIQUORICE ROOT EXTRACT 150MG, TONGKAT ALI EXTRACT 150MG, FENUGREEK SEED EXTRACT 100MG, AVENA SATIVA (DERIVED FROM OATS) 100MG, RHODIOLA ROSEA ROOT EXTRACT 100MG, BIOPERINE 5MG. ",
            servings: "240 caps"
        },
    };

    /*return <ProductCard product={product} />; */
    return (
        <ProductCard product={product}>
            <div className="ingredient-info">{product.options.ingredients}</div>
        </ProductCard>
    );
}

export default Contest;
