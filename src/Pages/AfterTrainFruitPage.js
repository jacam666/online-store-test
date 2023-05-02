import React from "react";
import ProductCard from "../components/ProductCard.js";

function AfterTrainFruit() {
  const product = {
    image: "./images/1After_Train_Fruit_Punch-1-300x300.png",
    name: "AFTER TRAIN FRUIT PUNCH POST WORKOUT",
    price: "£24.99",
    description:
      "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts. After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians",
      options: {
        servings: "17 x 55g servings",
        directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
        advice: "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
        storage: "Close tub after use. Store in a cool dry place."
      }
  };

  return <ProductCard product={product} />;
}

export default AfterTrainFruit;

