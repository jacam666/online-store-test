import React from "react";
import "../ProductCard.css";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const B4TrainGummy = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "11",
        image: "/images/B4-tropical-gummy-300x300.png",
        name: "B4 TRAIN TROPICAL GUMMY PRE-WORKOUT",
        price: 24.99,
        flavour: "Tropical Gummy",
        description: "B4 Train is a pre-workout that helps you get ready for your training session. It contains a blend of ingredients that support your energy, focus, and endurance levels. Whether you are lifting weights, running, or playing sports, B4 Train can help you perform better and recover faster. It has a delicious fruity taste and dissolves easily in water. Just mix one scoop with 250ml water and drink it 20-30 minutes before your workout.",
        directions: ["Mix 1 flat scoop with 250ml water.", <br />, "Consume within 20-30 minutes prior training."],
        servings: "375g provides 30 x 12.5g servings.",
        advice: "Keep out of reach of children. Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish, fish, peanuts, nuts seeds, celery, lupin and molluscs. Not suitable for persons under the age of 18 years.",

        storage: "Close tub after use. Store in a cool dry place.",
    };

    return (
        <div className="product-card">
            <div className="product-container">
                <div className="product-image-container">
                    <div className="name-and-bullet-container">
                        <h2 className="product-name">{product.name}</h2>
                        <div className="bullet-points-container" >
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">200 grams of Caffeine Anhydrous per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">3200mg of Beta-Alanine per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">1000mg of N-Acetyl L-Tyrosine per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">2500mg of Glycerol per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">150g of Guarana Seed Extract(22% Caffeine) per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">750g L-Taurine per 15g serving</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">120g of Vitamin C (Ascorbic Acid) per 15g serving</p>
                            </div>
                        </div>
                    </div>
                    <img
                        className="product-card-image"
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <div className="product-card-info">
                    <div className="product-flavour flavour-tropical-gummy">
                        <p>{product.flavour}</p>
                    </div>
                    <div className="product-price">
                        <p>Price: {product.price}</p>
                    </div>

                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <div className="servings-info">
                        <p>{product.servings}</p>
                    </div>

                    <p className="product-ingredient">{product.ingredients}</p>
                </div>
                <AddToCartButton
                    handleAddProduct={handleAddProduct}
                    productItem={product}
                />
            </div>

        </div>
    );
}

export default B4TrainGummy;
