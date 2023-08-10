import React from "react";
import "../ProductCard.css"
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const YearRound = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "12",
        image: "/images/Year-round-300x300.png",
        name: "YEAR ROUND IMMUNITY SUPPORT 60 caps",
        price: 19.99,
        description: [
            "Year Round Immunity Support is a supplement that helps you boost your immune system and fight off colds and viruses. It contains ingredients such as vitamin C, zinc, copper, elderberry, echinacea, garlic, and olive leaf that work together to support your natural defences and protect your health. It is suitable for vegetarians and vegans and does not contain any fillers, bulking agents, or anti-caking agents. You can take one capsule of Year Round Immunity Support daily with food for best results.",
        ],
        servings: "60 caps",
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
                                    <p className="product-bullet-points">175mg Echinacea (Echinacea Angustifolia) per capsule</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">100mg of Astragalus Root (Astragalus membranaceus) per capsule</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">100mg Olive Tree Extract per capsule</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">50mg of Beta Glucan 1,3/1,6 (from Saccharomyces Cerevisiae)</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">50g of Garlic Extract per capsule</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">120mg of Vitamin C (Ascorbic Acid)</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">10mg of Vitamin E (D-Alpha Tocophery)</p>
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
                        <div className="product-price">
                            <p>Price: {product.price}</p>
                        </div>

                        <div className="product-description">
                            <p>{product.description}</p>
                        </div>
                        <div className="servings-info">
                            <p>{product.servings}</p>
                        </div>
                        <div className="product-directions">
                            <p>{product.directions}</p>
                        </div>
                        <div className="product-advice">
                            <p>{product.advice}</p>
                        </div>
                        <div className="product-storage">
                            <p>{product.storage}</p>
                        </div>

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

export default YearRound;
