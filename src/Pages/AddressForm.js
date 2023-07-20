import React from 'react';
import "../AddressForm.css";

export default function AddressForm() {
    return (
        <React.Fragment>
            <h6 className="mb-3">Shipping address</h6>
            <div className="row g-3">
                <div className="col-sm-6">
                    <div className='form-floating '>
                    <input
                        required
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        type="text"
                        placeholder="First name"
                        autoComplete="given-name"
                    />
                    <label htmlFor='firstName'>First Name *</label>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className='form-floating '>
                    <input
                        required
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        type="text"
                        placeholder="Last name"
                        autoComplete="family-name"
                    />
                    <label htmlFor='lastName'>Last Name *</label>
                    </div>
                </div>
                <div className="col-12">
                <div className='form-floating '>
                    <input
                        required
                        id="address1"
                        name="address1"
                        className="form-control"
                        type="text"
                        placeholder="Address line 1"
                        autoComplete="shipping address-line1"
                    />
                    <label htmlFor='address1'>Address Line 1 *</label>
                    </div>
                </div>
                <div className="col-12">
                <div className='form-floating '>
                    <input
                        id="address2"
                        name="address2"
                        className="form-control"
                        type="text"
                        placeholder="Address line 2"
                        autoComplete="shipping address-line2"
                    />
                    <label htmlFor='address2' > Address Line 2</label>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className='form-floating '>
                    <input
                        required
                        id="city"
                        name="city"
                        className="form-control"
                        type="text"
                        placeholder="City"
                        autoComplete="shipping address-level2"
                    />
                    <label htmlFor='city'> City *</label>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className='form-floating '>
                    <input
                        id="state"
                        name="state"
                        className="form-control"
                        type="text"
                        placeholder="State/Province/Region"
                    />
                    <label htmlFor='state'> County *</label>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className='form-floating '>
                    <input
                        required
                        id="zip"
                        name="zip"
                        className="form-control"
                        type="text"
                        placeholder="Zip / Postal code"
                        autoComplete="shipping postal-code"
                    />
                    <label htmlFor='zip' > Zip Code or Postal Address *</label>
                    </div>
                </div>
                <div className="col-sm-6">
                <div className='form-floating '>
                    <input
                        required
                        id="country"
                        name="country"
                        className="form-control"
                        type="text"
                        placeholder="Country"
                        autoComplete="shipping country"
                    />
                    <label htmlFor='country'> Country *</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="saveAddress"
                            value="yes"
                            id="saveAddress"
                        />
                        <label className="form-check-label" htmlFor="saveAddress">
                            Use this address for payment details
                        </label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
