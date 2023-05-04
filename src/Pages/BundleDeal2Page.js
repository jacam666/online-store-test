/*import React from "react";
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
*/

import React, { useState } from "react";
import ProductCard from "../components/ProductCard.js";

function BundleDeal2() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    setBasketItems([...basketItems, item]);
  };

  const product = {
    image: "./images/BUNDLE-2-FINAL.png",
    name: "BUNDLE DEAL 2",
    price: "£44.99",
    description: [""],
    options: {},
  };

  return <ProductCard product={product} addToBasket={addToBasket} />;
}

export default BundleDeal2;
