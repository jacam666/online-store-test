import React from "react";
import "../ProductCard.css"

const B4ExtremeBlue = () => {
  const product = {
    id: "13",
    image: "./images/cap-b4pre-blue-300x300.png",
    name: ["B4 EXTREME",<br/>, "BLUE RASPBERRY FLAVOUR",<br/>, "STRONG PRE-WORKOUT"],
    price: "£24.99",
    description:
      "B4 Train Extreme is a very powerful Pre-Workout with maximum stim this is for the more experienced taker. only 1 scoop is recommended. flavour: Blue Raspberry.",
      servings: "Serving size (5g)",
      ingredients: [
        "INGREDIENTS:",
        <br />,
        " BETA-ALANINE……….2000MG",
        <br />,
        "L-TYROSINE……….500MG",
        <br />,
        "CYTIDINE DIPHOSHOCHOLINE.500MG",
        <br />,
        "as citicoline",
        <br />,
        "SENEGALIA BERLANDIERI EXTRACT.....150MG",
        <br />,
        "naturally occurring phenylethylamine alkaloid CAFFEINE ANHYDROUS……….250MG",
        <br />,
        "GUARANA SEED EXTRACT……….150MG VITAMIN B6……….20MG as pyridoxine hcl AFRAMOMUM MELEGUATA……….20MG",
        <br />,
        "as grains of paradise BIOPERINE……….10MG",
      ],
      directions:
        "Mix one scoop (5g) with 250ml of chilled water. Stir or shake vigorously for 30 seconds using a shaker. For accurate measure please revert to weighing scales using scoop provided. Consume 30 minutes before intense exercise. Drink at least 8 glasses of water daily when in use.",
      advice:
        "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
      storage: "Close tub after use. Store in a cool dry place.",
  };

  return (
    <div className="product-card">
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
                <p>{product.description}</p>
            </div>
            <div className="servings-info">
                <h1>Servings:</h1>
                <p>{product.servings}</p>
            </div>
            <div className="product-directions">
                <h1>Directions:</h1>
                <p>{product.directions}</p>
            </div>
            <div>
                <h1>Advice:</h1>
                <p className="product-advice">{product.advice}</p>
            </div>
            <div>
                <h1>Storage:</h1>
                <p className="product-storage">{product.storage}</p>
            </div>

            <p className="product-ingredient">{product.ingredients}</p>
        </div>
    </div>
);
}

export default B4ExtremeBlue;
