import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";

const Contest = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "17",
        image: "/images/PCT-NEW-300x300.png",
        name: "CON-TEST P.C.T 240 caps",
        price: 29.99,
        description:
            "Con-Test P.C.T is a supplement that helps you increase your natural testosterone, reduce your estrogen, and inhibit your cortisol. It contains ingredients such as D-aspartic acid, conjugated linoleic acid, bulbine natalensis, mucuna pruriens, ashwagandha root extract, liquorice root extract, tongkat ali extract, fenugreek seed extract, avena sativa, rhodiola rosea root extract, and bioperine that work together to improve your performance, overall well being, and sex drive. It is suitable for men who want to maximise their muscle gains, strength, and recovery. You can take eight capsules of Con-Test P.C.T daily with food for best results.",
        ingredients: [
            "D-ASPARTIC ACID 1400MG,",
            <br />,
            "CONJUGATED LINOLEIC ACID 700MG",
            <br />,
            "BULBINE NATALENSIS 300MG",
            <br />,
            "MUCCUNA PRURIENS 250MG",
            <br />,
            "ASHWAGANDHA ROOT EXTRACT 200MG",
            <br />,
            "LIQUORICE ROOT EXTRACT 150MG",
            <br />,
            "TONGKAT ALI EXTRACT 150MG",
            <br />,
            "FENUGREEK SEED EXTRACT 100MG",
            <br />,
            "AVENA SATIVA (DERIVED FROM OATS) 100MG",
            <br />,
            "RHODIOLA ROSEA ROOT EXTRACT 100MG",
            <br />,
            "BIOPERINE 5MG.",
        ],
        servings: "240 caps",
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
                                <p className="product-bullet-points">1400mg of D-Aspartic Acid</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">700mg of Conjugated Linoleic Acid</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">300mg of Bulbine Natalensis</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">250mg of Muccuna Pruriens</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">200mg of Ashwagandha Root Extract</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">150mg of Liquorice Root Extract</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">150mg of Tongkat Ali Extract</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">100mg of Fenugreek Seed Extract</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon"  />
                                <p className="product-bullet-points">100mg 0f Avena Sativa (Derived from Oats)</p>
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
                </div>
                <AddToCartButton
                    handleAddProduct={handleAddProduct}
                    productItem={product}
                />
            </div>

        </div>
    );
};

export default Contest;
