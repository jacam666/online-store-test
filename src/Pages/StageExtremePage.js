import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";


const StageExtreme = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "18",
        image: "/images/RIPPED-EXTREME-300x300.png",
        name: "STAGE RIPPED EXTREME",
        price: 34.99,
        description:
            "Stage Ripped Extreme is a weight loss supplement that helps you achieve maximum fat loss, energy, and appetite control. It contains ingredients such as caffeine, kola nut, guarana, 5-HTP, hordenine, paradoxine, and vitamins B3 and B6 that work together to boost your metabolism, mood, and thermogenesis. It has a high caffeine content, so you should use it with caution and not take it close to bedtime. You can take one capsule of Stage Ripped Extreme before your breakfast or lunch for best results.",
        servings: "60 caps",
    };

    return (
        <div className="product-card">
            <div className="product-container">
                <div className="product-image-container">
                    <div className="name-and-bullet-container">
                        <h2 className="product-name">{product.name}</h2>
                        <div className="bullet-points-container" >
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={12} />
                                <p className="product-bullet-points">300mg of Caffeine Anhydrous per capsule</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={17} />
                                <p className="product-bullet-points">100mg of Theobroma Caceo (12% Theobromine, 9% Caffeine)</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={14} />
                                <p className="product-bullet-points">100mg of Guarana Seed Extract (St.to 22% Caffeine)</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={9} />
                                <p className="product-bullet-points">95mg Hordenine HCL per capsule</p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={10} />
                                <p className="product-bullet-points">80mg 0f Aframomum Meleguata Extract </p>
                            </div>
                            <div className="bullet-points">
                                <BsFillHexagonFill className="hexagon-icon" size={17} />
                                <p className="product-bullet-points">40mg of Cayanne Pepper Extract as Capsicum Aunnuum (fruit)</p>
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
                        <h1>Description:</h1>
                        <p>{product.description}</p>
                    </div>
                    <div className="servings-info">
                        <h1>Servings:</h1>
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
    );
}

export default StageExtreme;
