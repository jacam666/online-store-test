import React from "react";
import "../ProductCard.css";
import AddToCartButton from "../components/AddToCartButton";
import Logo from "../components/Logo";

const AfterTrain = ({ productItem, handleAddProduct }) => {
  const product = {
    id: "8",
    image: "./images/apple-aftertrain-300x300.png",
    name: ["AFTER TRAIN APPLE", <br />, "POST WORKOUT"],
    price: 24.99,
    description:
      "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians",
    servings: "17 x 55g servings",
    directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
    advice: "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
    storage: "Close tub after use. Store in a cool dry place."

  };

  return (
    <div className="product-card">
      <Logo />
      <div className="product-container">
        <div className="product-image-container">
          <img
            className="after-train-product-card-image"
            src={product.image}
            alt={product.name}
          />
          <img className="after-train-product-card-image-2" src="images/after-train-nutri-info.jpeg" alt="protein" />
        </div>

        <div className="product-card-info">
          <h2 className="product-name">{product.name}</h2>
          <div className="product-price">
            <p>Price: {product.price}</p>
          </div>

          <div className="product-description">
            <h1>Description:</h1>
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
          {/*<div className="product-advice">
            <h1>Advice:</h1>
            <p>{product.advice}</p>
          </div>
          <div className="product-storage">
            <h1>Storage:</h1>
            <p>{product.storage}</p>
  </div>*/}

          <p className="product-ingredient">{product.ingredients}</p>
        </div>
      </div>
      <AddToCartButton
        handleAddProduct={handleAddProduct}
        productItem={product}
      />
    </div>
  );
}

export default AfterTrain;

