import React from "react";
import ProductCard from "../components/ProductCard.js";

function TrainingPlan() {
    const product = {
        image: "./images/620-620-traininngplan-1-300x300.jpg",
        name: "TRAINING PLAN 1 HOUR ONLINE",
        price: "£30.00",
        description: [
            "After owning a gym for 11 years with 30 years experience plus winning more than 30 top level shows I’ve pretty much seen and tried every possible workout. Whether you are just beginning or just need something different, I will draw up a training plan to suit you.",
        ],
        options: {
            
        },
    };

    return <ProductCard product={product} />;
}

export default TrainingPlan;
