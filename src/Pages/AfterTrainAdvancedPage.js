import React from "react";
import "../ProductCard.css"
import AddToCartButton from "../components/AddToCartButton";

const AfterTrainAdvanced = ({productItem, handleAddProduct}) => {
  const product = {
    id: "5",
    image: "/images/advanced-aftertrain-strawberrylime-300x300.png",
    name: "AFTER TRAIN ADVANCED POST WORKOUT",
    price: 39.99,
    description:
      "After Train Advanced has been specially formulated to aid recovery straight after a workout. WIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after them hard gruelling workouts. Suitable for vegetarian’s.",

    servings: "30 x 65g servings",
    directions:
      "2 x scoops with 400ml water. Consume within 20 minutes after training.",
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
        <div className="product-advice">
          <h1>Advice:</h1>
          <p>{product.advice}</p>
        </div>
        <div className="product-storage">
          <h1>Storage:</h1>
          <p>{product.storage}</p>
        </div>

        <p className="product-ingredient">{product.ingredients}</p>
      </div>
      <AddToCartButton
        handleAddProduct={handleAddProduct}
        productItem={product}
      />
    </div>
  );


}

export default AfterTrainAdvanced;
