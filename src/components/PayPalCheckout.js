import React, { useRef, useEffect, useState } from "react";
import PaymentFailure from "./PaymentFailure";
import PaymentSuccess from "./PaymentSuccess";
//import data from "./back/Data/Data";
import "../components/PayPal.css"

function PayPalCheckout( {basketItems}) {
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
    });

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

    /*return (
        <div>
            <div ref={paypal}></div>
            {data.productItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
            <p>Total: ${getTotalAmount()}</p>
        </div>
    );*/
    return (
        <div>
            <div ref={paypal}></div>
            {/*{basketItems.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
            <p>Total: ${getTotalAmount()}</p>*/}
            </div>
    );
}

export default PayPalCheckout;
