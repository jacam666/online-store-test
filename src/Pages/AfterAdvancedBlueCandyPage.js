import React from "react";
import ProductCard from "../components/ProductCard.js";

function AfterAdvancedBlueCandy() {
    const product = {
        image: "./images/AFTER-TRAIN-ADVANCED-300x300.png",
        name: [
            "AFTER TRAIN ADVANCED",
            <br />,
            "BLUE CANDY",
            <br />,
            "POST WORKOUT",
        ],
        price: "£39.99",
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
        </ProductCard>
    );
}

export default AfterAdvancedBlueCandy;
