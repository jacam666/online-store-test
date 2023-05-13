import React from "react";
import "../ProductCard.css";

const B4TrainGummy = () => {
  const product = {
    id: "11",
    image: "./images/B4-tropical-gummy-300x300.png",
    name: "B4 TRAIN TROPICAL GUMMY PRE-WORKOUT",
    price: "£24.99",
    description: "",
    directions: ["Mix 1 flat scoop with 250ml water.", <br />, "Consume within 20-30 minutes prior training."],
    servings: "375g provides 30 x 12.5g servings.",
    advice: "Keep out of reach of children. Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish, fish, peanuts, nuts seeds, celery, lupin and molluscs. Not suitable for persons under the age of 18 years.",

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

export default B4TrainGummy;
