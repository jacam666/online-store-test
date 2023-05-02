import React from "react";
//import ProductCard from "./ProductCard.js";
import ProductCard from "../components/ProductCard.js";


function StageExtreme() {
  const product = {
    image: "./images/RIPPED-EXTREME-300x300.png",
    name: "STAGE RIPPED EXTREME",
    price: "£34.99",
    description:
      "Stage Ripped Extreme has been especially formulated to aid in maximum weight loss. Giving increased energy and suppressing appetite, for best results take on a calorie reduced diet. warning high caffeine content, use with caution.",
    options: {
        servings: "60 caps",
    },
  };

  /*return <ProductCard product={product} />; */
  return (
    <ProductCard product={product}>
      <div className="ingredient-info">{product.options.ingredients}</div>
    </ProductCard>
  );
}

export default StageExtreme;
