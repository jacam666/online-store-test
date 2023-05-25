import React, { useState } from "react";
import "../components/checkout.css";
import { loadStripe } from '@stripe/stripe-js';



const Checkout = ({ basketItems = [] }) => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const stripePromise = loadStripe('pk_test_51NBE82FW6Es16DlXS5FdAW2ELyZgIBdbeykYU5VEBev6G6BNglbpdAF2Ac06KADKpRHSCZswK96mKWat1gCyn3tf00GWzIem8P');

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

    const orderSummaryText = isBasketOpen
        ? "Hide Order Summary"
        : "Show Order Summary";

    const handleClick = async () => {
        const stripe = await stripePromise;

        
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 1000, currency: 'gbp' })
        });

        const { clientSecret, error } = await response.json();

        if (error) {
            
        } else {
            
            const result = await stripe.confirmCardPayment(clientSecret);

            if (result.error) {
                console.log(result.error.message);
            } else {
                console.log('Payment successful');
            }
        }
    };

    const PaymentButton = () => {
        return (
            <button className="checkout-paypal-button" onClick={handleClick}>
                Pay with Stripe
            </button>
        );
    };
    return (
        <div>
            <h1 className="checkout-heading">Checkout</h1>
            <div className="checkout-container">
                <div>
                    <div>
                        <div className="order-summary">
                            <h2 className="order-summary-heading">{orderSummaryText}</h2>

                            <div className="checkout-basket-dropdown">
                                <div className="checkout-basket-header" onClick={toggleBasket}>
                                    <span className="arrow-icon">{isBasketOpen ? "▲" : "▼"}</span>
                                </div>

                                {isBasketOpen && (
                                    <div className="accordion-container">
                                        <div
                                            className={`accordion-content ${isBasketOpen ? "open" : ""
                                                }`}
                                        >
                                            <div className="checkout-basket-items">
                                                {basketItems.map((item) => (
                                                    <div key={item.id} className="checkout-basket-item">
                                                        <span className="checkout-item-name">
                                                            {item.name}
                                                        </span>
                                                        <span className="checkout-item-quantity">
                                                            {" "}
                                                            Quantity: {item.quantity}
                                                        </span>
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
                    </div>
                </div>

                <div className="shipping-details">
                    <h2 className="address-heading">Billing details:</h2>

                    <input
                        className="shipping-firstName"
                        type="text"
                        placeholder="First Name"
                        name=""
                        id="shipping-FirstName"
                        autoComplete="given-name"
                    />
                    <input
                        className="shipping-lastName"
                        type="text"
                        placeholder="Last Name"
                        name=""
                        id="shipping-lastName"
                        autoComplete="family-name"
                    />

                    <input
                        className="company-name"
                        type="text"
                        placeholder="Company (optional)"
                        name=""
                        id="company"
                        autoComplete="organization"
                    />
                    <input
                        className="address"
                        type="text"
                        placeholder="Address"
                        name=""
                        id="Address"
                        autoComplete="address-line1"
                    />
                    <input
                        className="address-line-two"
                        type="text"
                        placeholder="Apartment, Suite, etc, (optional)"
                        name=""
                        id="address-line2"
                        autoComplete="address-line2"
                    />
                    <input
                        className="city"
                        type="text"
                        placeholder="City"
                        name=""
                        id="city"
                        autoComplete="address-level2"
                    />
                    <input
                        className="postcode"
                        type="text"
                        placeholder="Postcode"
                        name=""
                        id="postcode"
                        autoComplete="postal-code"
                    />
                    <input
                        className="phone-number"
                        type="text"
                        placeholder="Phone number for order and delivery updates"
                        name=""
                        id="phone"
                        autoComplete="tel"
                    />
                </div>
                <PaymentButton />
                {/*<button className="checkout-paypal-button">Proceed to PayPal</button>*/}

            </div>
        </div>
    );
};

export default Checkout;
