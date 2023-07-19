import React from 'react';

export default function PaymentForm() {
    return (
        <div>
            <h6>Payment method</h6>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <input
                        required
                        id="cardName"
                        className="form-control"
                        type="text"
                        placeholder="Name on card"
                        autoComplete="cc-name"
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        required
                        id="cardNumber"
                        className="form-control"
                        type="text"
                        placeholder="Card number"
                        autoComplete="cc-number"
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        required
                        id="expDate"
                        className="form-control"
                        type="text"
                        placeholder="Expiry date"
                        autoComplete="cc-exp"
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <input
                        required
                        id="cvv"
                        className="form-control"
                        type="text"
                        placeholder="CVV"
                        autoComplete="cc-csc"
                    />
                    <small className="form-text text-muted">Last three digits on signature strip</small>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="saveCard"
                            value="yes"
                            id="saveCard"
                        />
                        <label className="form-check-label" htmlFor="saveCard">
                            Remember credit card details for next time
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
