import React, { useState } from "react";
import "../components/checkout.css";
import PayPalCheckout from "../components/PayPalCheckout";

const Checkout = ({ productItem, basketItems = [] }) => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const totalPrice =
        basketItems.length > 0
            ? basketItems.reduce(
                (price, item) => price + item.quantity * item.price,
                0
            )
            : 0;

    const toggleBasket = () => {
        setIsBasketOpen(!isBasketOpen);
    };

    const orderSummaryText = isBasketOpen ? "Hide Order Summary" : "Show Order Summary";


    return (
        <div>
            <h1 className="checkout-heading">Checkout</h1>
            <div className="checkout-container">
                <div className="order-summary">
                    <h2 className="order-summary-heading" onClick={toggleBasket}>
                        {orderSummaryText}
                        <span className="arrow-icon">{isBasketOpen ? "▲" : "▼"}</span>
                    </h2>
                    <div className="checkout-basket-dropdown">
                        {isBasketOpen && (
                            <div className="accordion-container">
                                <div className={`accordion-content ${isBasketOpen ? "open" : ""}`}>
                                    <div className="checkout-basket-items">
                                        {basketItems.map((item) => (
                                            <div key={item.id} className="checkout-basket-item">
                                                <span className="checkout-item-name">{item.name}</span>
                                                <span className="checkout-item-quantity"> Quantity: {item.quantity}</span>
                                                <span> Price: {item.quantity * item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="checkout-total">£{totalPrice.toFixed(2)}</div>
                </div>
                <PayPalCheckout basketItems={basketItems} />
                
            </div>
        </div>
    );
};

export default Checkout;

