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
        loadScript({ "client-id": "Ad6wNMdX3kJ6Q02mniiIpXtZ-W86eBgOLhk_wHVfE12Ft5r5BRqhXYvxLAeqewz-bOWpRJDzr7iDYCj6" })
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



