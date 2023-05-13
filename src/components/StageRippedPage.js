/*import React from "react";
import ProductCard from "../components/ProductCard.js";

function AfterTrain() {
  const image = "./images/apple-aftertrain-300x300.png";
  const name = "AFTER TRAIN APPLE POST WORKOUT";
  const price = "£24.99";
  const description =
    "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians";
  /*17 x 55g servings Get the most out of your training and use After Train to aid recovery. 
    DIRECTIONS FOR USE 2 x scoops with 400ml water. Consume within 20 minutes after training.
    ADVICE / WARNINGS
    Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.
    STORAGE ADVICE
    Close tub after use. Store in a cool dry place.";*/
/*
  return (
    <ProductCard
      image={image}
      name={name}
      price={price}
      description={description}
    />
  );
}

export default AfterTrain; */

import React from "react";
import "../ProductCard.css"

const StageRipped = () => {
  const product = {
    id: "6",
    image: "/images/Stage-Ripped-CGI-300x300.png",
    name: "STAGE RIPPED 60 caps",
    price: "£29.99",
    description:
      "Stage Ripped has been especially formulated to aid in weight loss, giving energy, suppressing appetite and increasing body temperature for burning fat. For best results take on a calorie reduced diet.",

    ingredients: "INGREDIENT INFORMATION 1 Capsule: Caffenine Anhydrous 225mg, Kola Nut Extract 3% Caffeine, 2% Theobromine 200mg, Guarana Seed Extract125mg, 5-HTP 5-Hydroxytophan 75mg, Hordenine HCL 75mg, Paradoxine Grains of paradise. Std. to 12.5% 6- paradol 40mg, Vitamin B3 5mg 25%, Vitamin B6 as Pyridoxine HCL 5mg 357% Chromium Picolinate 100mcg 250% ",
    servings: "60 caps"

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
          <p>{product.directions}</p>
        </div>
        <div>
          <p className="product-advice">{product.advice}</p>
        </div>
        <div>
          <p className="product-storage">{product.storage}</p>
        </div>
        <div>
          <h1>Ingredients:</h1>
          <p className="product-ingredient">{product.ingredients}</p>
        </div>
      </div>
    </div>
  );
}

export default StageRipped;
