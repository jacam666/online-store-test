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
import ProductCard from "../components/ProductCard.js";

function AfterTrain() {
  const product = {
    image: "./images/apple-aftertrain-300x300.png",
    name: "AFTER TRAIN POST WORKOUT",
    price: "£24.99",
    description:
      "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians",
      options: {
        servings: "17 x 55g servings",
        directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
        advice: "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
        storage: "Close tub after use. Store in a cool dry place.",
        flavors: ["Apple", "chocolate"]
      }
  };

  return <ProductCard product={product} />;
}

export default AfterTrain;

