/*import React, { useState } from "react";
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
*/


import React from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import "../components/checkout.css";
import ReviewPage from './ReviewPage';


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <ReviewPage />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <div>
            
            <div className="container mt-4">
                <div className="checkout-card p-3 white-background">
                    <h1 className="h4 text-center">Checkout</h1>
                    <ul className="nav nav-pills nav-justified mb-4">
                        {steps.map((label, index) => (
                            <li key={index} className={`nav-item ${index === activeStep ? 'active' : ''}`}>
                                <span className="nav-link">{label}</span>
                            </li>
                        ))}
                    </ul>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <h5 className="mb-3 text-center">Thank you for your order.</h5>
                            <p className="text-center">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </p>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className="d-flex justify-content-end">
                                {activeStep !== 0 && (
                                    <button onClick={handleBack} className="btn btn-secondary mt-3 me-2">
                                        Back
                                    </button>
                                )}
                                <button
                                    onClick={handleNext}
                                    className="btn btn-primary mt-3"
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </button>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        
        </div>
    );
}
