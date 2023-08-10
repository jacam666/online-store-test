import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const AfterTrainOrange = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "4",
        image: "/images/3After_Train_Orange-1-300x300.png",
        name: "AFTER TRAIN ORANGE POST WORKOUT",
        price: 24.99,
        flavour: "Orange",
        description:
            "After Train has been specially formulated to aid recovery straight after a workout. with its 50/50 ratio of isolate and carbs combined with creatine and glutamine makes this a great all in one recovery drink. Easy to mix formula and superb flavours it is amazingly refreshing and easy to drink after them hard gruelling workouts."/* After Train is produced to iso 22000 standards, batch tested and made in an informed sport approved facility. Suitable for vegetarians"*/,
        servings: "17 x 55g servings",
        directions: "2 x scoops with 400ml water. Consume within 20 minutes after training.",
        advice: "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
        storage: "Close tub after use. Store in a cool dry place.",
    };

    return (
        <div>
            <div className="product-card">
                <div className="product-container">
                    <div className="product-image-container">
                        <div className="name-and-bullet-container">
                            <h2 className="product-name">{product.name}</h2>
                            <div className="bullet-points-container" >
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">26g of protein to support growth and maintenance of muscle</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">25g of high-quality  carbohydrates to support your growth goals</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">2.8g of Creatine Monohydrate to help build lean muscle mass, maximize performance, and increase strength. </p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">3.7g of L-Glutamine helps enhance athletic performance and build muscle tissue</p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="product-card-image after-train-image"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    <div className="product-card-info">
                        <div className="product-flavour flavour-orange">
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
                        {/*<div className="product-directions">
                    <h1>Directions:</h1>
                    <p>{product.directions}</p>
    </div>*/}
                        <p className="product-ingredient">{product.ingredients}</p>
                    </div>
                    <AddToCartButton
                        handleAddProduct={handleAddProduct}
                        productItem={product}
                    />
                </div>
            </div>
        </div>
    );
}

export default AfterTrainOrange;

