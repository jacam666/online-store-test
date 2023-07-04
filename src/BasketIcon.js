import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./BasketIcon.css"
import { Link } from 'react-router-dom';

class BasketIcon extends React.Component {
    render() {
        return (
            <Link to="/BasketPage">
                <FaShoppingCart className='shopping-icon'/>
            </Link>
        );
    }
}
export default BasketIcon;
