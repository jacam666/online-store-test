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

function AfterTrainAdvanced() {
  const product = {
    image: "/images/advanced-aftertrain-strawberrylime-300x300.png",
    name: "AFTER TRAIN ADVANCED POST WORKOUT",
    price: "£24.99",
    description:
      "After Train Advanced has been specially formulated to aid recovery straight after a workout. WIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after them hard gruelling workouts. Suitable for vegetarian’s.",
    options: {
      servings: "30 x 65g servings",
      directions:
        "2 x scoops with 400ml water. Consume within 20 minutes after training.",
      advice:
        "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
      storage: "Close tub after use. Store in a cool dry place.",
    },
  };

  /*return <ProductCard product={product} />; */
  return (
    <ProductCard product={product}>
      <div className="servings">{product.options.servings}</div>
    </ProductCard>)
}

export default AfterTrainAdvanced;
