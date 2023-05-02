import React from "react";
import ProductCard from "../components/ProductCard.js";

function NoMoreHunger() {
    const product = {
        image: "./images/NO-HUNGER-300x300.png",
        name: "NO MORE HUNGER 90 caps",
        price: "£29.99",
        description: [
            "No more hunger has been especially formulated to suppress appetite, it doesn’t contain any form of stimulates so it can be taken later in the evening when food cravings are most likely to kick in. No more hunger is very effective when taken in conjunction with Stage Ripped, Stage Ripped is most effective if taken early in the day giving you energy and suppressing appetite throughout the day, once the Stage Ripped wears off you can take No more hunger keeping the fat burning process going in the evening and during the night.",
        ],
        options: {
            ingredients: ["Fenugreek Seed Extract 4:1 600MG",<br/>,"Garcinia Cambogia Extract (st.to 60% HCA) 450MG",<br/>,
            "5-HTP (derived from Griffonia Simplicfolia Extract) 300mg",<br/>,
            "Gymnema Sylvestre Extract (25% Gymnemic Acid) 300mg",<br/>,
            "Forskolin (Coleus Forsolii)(st.st.to 20% Forskolin) 255mg",<br/>,
            "Alpha Lipoic-Acid 150mg",<br/>,
            "Paradoxine Grains of Paradise)(st.to 12.6% 6-Paradol) 50mg",<br/>,
            "Vegetable based capsules (Hydroxpropyl methylcellulose purified water)"],
    },
}

    return <ProductCard product={product} />;
}

export default NoMoreHunger;
