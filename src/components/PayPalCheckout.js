/*import React, { useRef, useEffect, useState, useCallback } from "react";
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

*/
import React, { useEffect, useState, useCallback } from "react";
import PaymentFailure from "./PaymentFailure";
import PaymentSuccess from "./PaymentSuccess";
import "../components/PayPal.css";
import { loadScript} from "@paypal/paypal-js";

function PayPalCheckout({ basketItems }) {
    const [transactionStatus, setTransactionStatus] = useState(null);

    const getTotalAmount = useCallback(() => {
        let total = 0;
        basketItems.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    }, [basketItems]);

    useEffect(() => {
        loadScript({ "client-id": "ARMfiWZxzTjnLoyw6u70AQxSHCxXrQENQS7TZSxYqY8X4AP0yZ-8aqmLyqTYPRDOWcQ3_Zglufer9ZiL" })
            .then((paypal) => {
                window.paypal = paypal;

                window.paypal
                    .Buttons({
                        createOrder: (data, actions, err) => {
                            return actions.order.create({
                                intent: "CAPTURE",
                                purchase_units: [
                                    {
                                        description: "Product Purchase",
                                        amount: {
                                            currency_code: "USD",
                                            value: getTotalAmount(),
                                            breakdown: {
                                                item_total: {
                                                    currency_code: "USD",
                                                    value: getTotalAmount(),
                                                },
                                                shipping_total: {
                                                    currency_code: "USD",
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
                    .render(".paypal-button");
            })
            .catch((err) => {
                console.error("Failed to load the PayPal JS SDK script", err);
            });
    }, [getTotalAmount]);

    if (transactionStatus === "success") {
        return <PaymentSuccess />;
    }

    if (transactionStatus === "failure") {
        return <PaymentFailure />;
    }

    return (
        <div className="paypal-checkout-container">
            <div className="paypal-button"></div>
        </div>
    );
}

export default PayPalCheckout;



