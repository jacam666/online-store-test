import React from "react";
import "../ProductCard.css"
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const B4ExtremeBlue = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "13",
    image: "/images/cap-b4pre-blue-300x300.png",
    name: ["B4 EXTREME", <br />, "BLUE RASPBERRY FLAVOUR", <br />, "STRONG PRE-WORKOUT"],
    price: 24.99,
    flavour: "Blue Raspberry",
    description:
      "B4 Extreme Blue Raspberry is a pre-workout supplement that delivers maximum stimulation, focus, and performance. It contains ingredients such as beta-alanine, L-tyrosine, citicoline, caffeine, guarana, vitamin B6, grains of paradise, and bioperine that work together to enhance your energy, mood, and blood flow. It has a very high caffeine content. You can take one scoop of B4 Extreme Blue Raspberry with 250ml of water 30 minutes before your workout. It has a delicious Blue Raspberry flavour that will refresh your senses.",
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
      <div className="product-container">
        <div className="product-image-container">
          <div className="name-and-bullet-container">
            <h2 className="product-name">{product.name}</h2>
            <div className="bullet-points-container" >
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">250 grams of Caffeine Anhydrous per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">2000mg of Beta-Alanine per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">500mg of L-Tyrosine per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">150g of Senegalia Berlandieri Extract per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">150g of Guarana Seed Extract per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">500g of Cytidine Diphoshocholine as Citicoline per 5g serving</p>
              </div>
              <div className="bullet-points">
                <BsFillHexagonFill className="hexagon-icon"  />
                <p className="product-bullet-points">20g of B6 as Pyridoxine hcl per 5g serving</p>
              </div>
            </div>
          </div>
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-card-info">
          <div className="product-flavour flavour-blue-raspberry">
            <p>{product.flavour}</p>
          </div>
          <div className="product-price">
            <p>Price: {product.price}</p>
          </div>

          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <div className="servings-info">
            <p>{product.servings}</p>
          </div>
          {/*<div className="product-advice">
          <h1>Advice:</h1>
          <p>{product.advice}</p>
        </div>
        <div className="product-storage">
          <h1>Storage:</h1>
          <p>{product.storage}</p>
  </div>*/}

          {/*<p className="product-ingredient">{product.ingredients}</p>*/}
        </div>
        <AddToCartButton
          handleAddProduct={handleAddProduct}
          productItem={product}
        />
      </div>

    </div>
  );
}

export default B4ExtremeBlue;
