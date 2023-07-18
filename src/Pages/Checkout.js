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
                <div className='order-summary'>
                    <h1 className='order-summary-heading' onClick={toggleBasket}>
                        <span className="order-summary-text">{orderSummaryText}</span>
                        <span className="arrow-icon">{isBasketOpen ? "▲" : "▼"}</span>
                        <div className="checkout-total">£{totalPrice.toFixed(2)}</div>
                    </h1>
                    {isBasketOpen && <div className="checkout-basket-items">
                        {basketItems.map((item) => (
                            <div key={item.id} className="checkout-basket-item">
                                <img className="checkout-item-image" src={item.image} alt={item.name} />
                                <span className="checkout-item-name">{item.name}</span>
                                <span className="checkout-item-quantity"> Quantity: {item.quantity}</span>
                                <span className="checkout-item-price"> Price: {(item.quantity * item.price).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>}

                </div>
                <div>
                    <PayPalCheckout basketItems={basketItems} />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
