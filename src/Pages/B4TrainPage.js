import React from "react";
import ProductCard from "../components/ProductCard.js";

function B4Train() {
  const product = {
    image: "./images/B4-Rio-berry-300x300.png",
    name: "B4 TRAIN RI-BERRY PRE-WORKOUT",
    price: "£24.99",
    description: [
      "DIRECTIONS FOR USE",
      <br />,
      "Mix 1 flat scoop with 250ml water.",
      <br />,
      "Consume within 20-30 minutes prior training. 375g provides 30 x 12.5g servings.",
      <br />,
      "ADVICE / WARNINGS:",
      <br />,
      "Keep out of reach of children. Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish, fish, peanuts, nuts seeds, celery, lupin and molluscs. Not suitable for persons under the age of 18 years.",
      <br />,
      "STORAGE ADVICE:",
      <br />,
      "Close tub after use. Store in a cool dry place.",
    ],
    options: {
      
    }
  };

  return <ProductCard product={product} />;
}

export default B4Train;
