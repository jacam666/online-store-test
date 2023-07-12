import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";
import BasketIcon from "../BasketIcon";

const AfterAdvancedOrange = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "16",
        image: "/images/orange-mango-advanced-aftertrain-for-web-300x300.png",
        //image2: "/images/after-advanced-nutri-info.jpeg",
        name: ["AFTER TRAIN ADVANCED 2KG"],
        /*<br />,
        "ORANGE AND MANGO FLAVOUR",
        <br />,
        "POST WORKOUT",*/

        price: 39.99,
        flavour: "Orange and Mango",
        description:
            "After Train Advanced has been specially formulated to aid recovery straight after a workout. WIth the very best ingredients 100% whey protein isolate, cyclic dextrin, creatine and glutamine makes this one of the best all in one recovery drinks on the market. With it’s easy to mix formula and superb flavour it is amazingly refreshing and easy to drink after those hard gruelling workouts. Suitable for vegetarian’s.",
        servings: "30 x 65g servings",
        directions:
            "2 x scoops with 400ml water. Consume within 20 minutes after training.",
        advice:
            "Keep out of reach of children, Once mixed keep chilled and consume within 3 hours. Manufactured on equipment which processes products containing cereals, milk, egg, soya, shellfish.",
        storage: "Close tub after use. Store in a cool dry place.",
    };

    return (
        <div>
            <BasketIcon className="product-page-basket-icon" />
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
                                    <p className="product-bullet-points">25g of of high-quality  carbohydrates to support your growth goals</p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="product-card-image"
                            src={product.image}
                            alt={product.name}
                        />
                        {/*<img
                        className="product-card-image-2"
                        src={product.image2}
                        alt={product.name}
                    />*/}
                        {/*<img className="product-image-2" src="images/after-advanced-nutri-info.jpeg" alt="protein" />*/}
                    </div>

                    <div className="product-card-info">
                        <div className="product-flavour flavour-orange-mango">
                            <p>{product.flavour}</p>
                        </div>
                        <div className="product-price">
                            <p>Price: {product.price}</p>
                        </div>

                        <div className="product-description">
                            <h1>Description:</h1>
                            <p>{product.description}</p>
                        </div>
                        <div className="servings-info">
                            <p>{product.servings}</p>
                        </div>
                        {/*<div className="product-advice">
                    <h1>Advice:</h1>
                    <p>{product.advice}</p>
                </div>
                <div className="product-storage">
                    <h1>Storage:</h1>
                    <p>{product.storage}</p>
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

export default AfterAdvancedOrange;
