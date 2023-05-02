import React from "react";
import ProductCard from "../components/ProductCard.js";

function StagePumpStrawberry() {
    const product = {
        image: "./images/cap-stagepump-strawberry-lime-300x300.png",
        name: "STAGE PUMP STRAWBERRY AND LIME FLAVOUR",
        price: "£29.99",
        description: [
            "STAGE PUMP IS SPECIALLY FORMULATED TO GIVE MIND BLOWING PUMPS, FOCUS AND INCREASED VASCULARITY.",
        ],
        options: {
            directions:
                "DIRECTIONS OF USE: MIX ONE SCOOP (20G) WITH250ML OF CHILLED WATER. STIR OR SHAKE VIGOROUSLY FOR 30 SECONDS USING A SHAKER. FOR ACCURATE MEASURE PLEASE REVERT TO WEIGHING SCALES USING THE SCOOP PROVIDED. CONSUME 30 MINUTES BEFORE INTENSE EXERCISE.",
        },
    };

    return <ProductCard product={product} />;
}

export default StagePumpStrawberry;
