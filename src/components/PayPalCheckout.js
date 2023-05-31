/*import React, { useRef, useEffect, useState } from "react";
import PaymentFailure from "./PaymentFailure";
import PaymentSuccess from "./PaymentSuccess";
import "../components/PayPal.css"

function PayPalCheckout({ basketItems }) {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Product Purchase",
                                amount: {
                                    currency_code: "GBP",
                                    value: getTotalAmount(),
                                    breakdown: {
                                        item_total: {
                                            currency_code: "GBP",
                                            value: getTotalAmount(),
                                        },
                                        shipping_total: {
                                            currency_code: "GBP",
                                            value: 3.99,
                                        },
                                    }
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();

                    console.log("success", order);
                    setTransactionStatus("success");
                },
                onError: (err) => {
                    console.log(err);
                    setTransactionStatus("failure");
                },
            })
            .render(paypal.current);
    }, [getTotalAmount]);

    const getTotalAmount = () => {
        let total = 0;
        //data.productItems.forEach((item) => {
        basketItems.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    if (transactionStatus === "success") {
        return <PaymentSuccess />;
    }

    if (transactionStatus === "failure") {
        return <PaymentFailure />;
    }
    return (
        <div className="paypal-checkout-container">
            <div ref={paypal} className="paypal-button"></div>
        </div>
    );
}

export default PayPalCheckout;  */
import React, { useRef, useEffect, useState, useCallback } from "react";
import PaymentFailure from "./PaymentFailure";
import PaymentSuccess from "./PaymentSuccess";
import "../components/PayPal.css";

function PayPalCheckout({ basketItems }) {
    const paypal = useRef();
    const [transactionStatus, setTransactionStatus] = useState(null);

    const getTotalAmount = useCallback(() => {
        let total = 0;
        basketItems.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    }, [basketItems]);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Product Purchase",
                                amount: {
                                    currency_code: "GBP",
                                    value: getTotalAmount(),
                                    breakdown: {
                                        item_total: {
                                            currency_code: "GBP",
                                            value: getTotalAmount(),
                                        },
                                        shipping_total: {
                                            currency_code: "GBP",
                                            value: 3.99,
                                        },
                                    },
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log("success", order);
                    setTransactionStatus("success");
                },
                onError: (err) => {
                    console.log(err);
                    setTransactionStatus("failure");
                },
            })
            .render(paypal.current);
    }, [getTotalAmount]);

    if (transactionStatus === "success") {
        return <PaymentSuccess />;
    }

    if (transactionStatus === "failure") {
        return <PaymentFailure />;
    }

    return (
        <div className="paypal-checkout-container">
            <div ref={paypal} className="paypal-button"></div>
        </div>
    );
}

export default PayPalCheckout;

