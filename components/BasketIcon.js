import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

class BasketIcon extends React.Component {
    render() {
        return (
            <h3>
                <FaShoppingCart className='shopping-icon'/>
            </h3>
        );
    }
}
export default BasketIcon;
