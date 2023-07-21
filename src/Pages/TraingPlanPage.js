import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import { BsFillHexagonFill } from "react-icons/bs";
import BasketIcon from "../BasketIcon";
import "../TrainingPlan.css"

const TrainingPlan = ({ productItem, handleAddProduct }) => {
    const product = {
        id: "20",
        image: "/images/620-620-traininngplan-1-300x300.jpg",
        name: "TRAINING PLAN",
        price: 30.00,
        description: [
            "SNC Training Plan is a service that offers personalised and effective workout plans for anyone who wants to improve their fitness, health, and physique. Whether you are a beginner or an advanced trainee, you can get a customised training plan that suits your goals, level, and schedule. The training plans are designed by an experienced and qualified trainer who has won more than 30 top level shows and owned a gym for 11 years. You can get a training plan for as low as £30 and start your fitness journey today.",
        ],
    };

    return (
        <div>
            <BasketIcon className="product-page-basket-icon" />
            <div className="product-card">
                <div className="product-container">
                    <div className="training-plan-product-image-container">
                        <div className="name-and-bullet-container">
                            <h2 className="product-name">{product.name}</h2>
                            <div className="bullet-points-container" >
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">1 Hour Online Training Plan</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">30 Years of Experience</p>
                                </div>
                                <div className="bullet-points">
                                    <BsFillHexagonFill className="hexagon-icon" />
                                    <p className="product-bullet-points">Get Coaching from a Winner of over 30 Top Level Competitions</p>
                                </div>
                            </div>
                        </div>
                        <img
                            className="training-plan-product-card-image"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="product-card-info">
                        <div className="product-price">
                            <p>Price: £{product.price}</p>
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
                            <p >{product.advice}</p>
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

export default TrainingPlan;
