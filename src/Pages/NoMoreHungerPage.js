import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const NoMoreHunger = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "15",
        image: "/images/NO-HUNGER-300x300.png",
        name: "NO MORE HUNGER 90 caps",
        price: 29.99,
        description: [
            "No Hunger is an appetite suppressant supplement that helps you control your cravings and stick to your diet. It contains ingredients such as fenugreek, garcinia cambogia, 5-HTP, gymnema sylvestre, forskolin, alpha lipoic acid, and paradoxine that work together to reduce your hunger, improve your mood, and support your metabolism. It does not contain any stimulants, so you can take it in the evening without affecting your sleep. You can take No Hunger with Stage Ripped for a powerful fat-burning combo.",
        ],
        ingredients: [
            "Fenugreek Seed Extract 4:1 600MG",
            <br />,
            "Garcinia Cambogia Extract (st.to 60% HCA) 450MG",
            <br />,
            "5-HTP (derived from Griffonia Simplicfolia Extract) 300mg",
            <br />,
            "Gymnema Sylvestre Extract (25% Gymnemic Acid) 300mg",
            <br />,
            "Forskolin (Coleus Forsolii)(st.st.to 20% Forskolin) 255mg",
            <br />,
            "Alpha Lipoic-Acid 150mg",
            <br />,
            "Paradoxine Grains of Paradise)(st.to 12.6% 6-Paradol) 50mg",
            <br />,
            "Vegetable based capsules (Hydroxpropyl methylcellulose purified water)",
        ],
        servings: "90 Caps"
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
                                    <p className="product-bullet-points">600mg of Fenugreek Seed Extract 4:1</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">450mg of Garcinia Cambogia Extract (st.to 60% HCA)</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">300mg of 5-HTP (derived from Griffonia Simplicifolia Extract)</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">300mg of Gymnema Sylvestre Extract (25% Gymnemic Acid),</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">255mg 0f Forskolin (Coleus Forskolii) (st.to to 20% Forskolin)</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">150mg of Paradoxine (Grains of paradise)(st.to 12.6% 6-Paradol) </p>
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

                        {/*<p className="product-ingredient">{product.ingredients}</p>*/}
                    </div>
                    <AddToCartButton
                        handleAddProduct={handleAddProduct}
                        productItem={product}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoMoreHunger;
