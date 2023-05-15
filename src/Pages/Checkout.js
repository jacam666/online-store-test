import React from 'react'
import "../components/checkout.css"

const Checkout = () => {
    return (
        <div>
            <h1 className='checkout-heading'>Checkout</h1>
            <div className='checkout-container'>

                <h2 className='address-heading'>Shipping Address:</h2>
                <input
                    className="shipping-firstName"
                    type="text"
                    placeholder="First Name"
                    name=""
                    id="shipping-FirstName"
                    autoComplete='given-name'
                />
                <input
                    className='shipping-lastName'
                    type='text'
                    placeholder='Last Name'
                    name=""
                    id='shipping-lastName'
                    autoComplete='family-name'
                />
                <input
                    className='company-name'
                    type='text'
                    placeholder='Company (optional)'
                    name=''
                    id='company'
                    autoComplete='organization'
                />
                <input
                    className='address'
                    type='text'
                    placeholder='Address'
                    name=''
                    id='Address'
                    autoComplete='address-line1'
                />
                <input
                    className='address-line-two'
                    type='text'
                    placeholder='Apartment, Suite, etc, (optional)'
                    name=''
                    id='address-line2'
                    autoComplete='address-line2'
                />
                <input
                    className='city'
                    type='text'
                    placeholder='City'
                    name=''
                    id='city'
                    autoComplete='address-level2'
                />
                <input
                    className='postcode'
                    type='text'
                    placeholder='Postcode'
                    name=''
                    id='postcode'
                    autoComplete='postal-code'

                />
                <input
                    className='phone-number'
                    type='text'
                    placeholder='Phone number for order and delivery updates'
                    name=''
                    id='phone'
                    autoComplete='tel'
                />
            </div>
        </div>
    )
}

export default Checkout;