import React, { useState } from 'react'
import "../components/checkout.css"

const Checkout = ({ basketItems = [] }) => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);


    const totalPrice = basketItems.length > 0
        ? basketItems.reduce((price, item) => price + item.quantity * item.price, 0)
        : 0;

    const toggleBasket = () => {
        setIsBasketOpen(!isBasketOpen);
    }

    const orderSummaryText = isBasketOpen ? 'Hide Order Summary' : 'Show Order Summary';


    return (
        <div>
            <h1 className='checkout-heading'>Checkout</h1>
            <div className='checkout-container'>
                <div>
                    <div>
                        <div className='order-summary'>
                            {/*<h2 className='order-summary-heading'>Show Order Summary</h2>*/}
                            <h2 className='order-summary-heading'>{orderSummaryText}</h2>

                            
                            <div className='checkout-basket-dropdown'>
                                <div className='checkout-basket-header' onClick={toggleBasket}>
                                    <span className='arrow-icon'>{isBasketOpen ? '▲' : '▼'}</span>
                                </div>
                                
                                {isBasketOpen && (
                                    <div className='checkout-basket-items'>
                                        {basketItems.map((item) => (
                                            <div key={item.id} className='checkout-basket-item'>
                                                <span className='checkout-item-name'>{item.name}</span>
                                                <span className='checkout-item-quantity'> Quantity: {item.quantity}</span>
                                                <span> Price: {item.quantity * item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='checkout-total'>
                                £{totalPrice}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='address-heading'>Shipping Address:</h2>
                <div>
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
                </div>
                
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
        </div >
    )
}

export default Checkout;