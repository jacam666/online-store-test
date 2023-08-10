/*import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./BasketIcon.css"
import { Link } from 'react-router-dom';

class BasketIcon extends React.Component {
    render() {

        const { className } = this.props;
        const iconClassName = className ? `shopping-icon ${className}` : 'shopping-icon'

        return (
            <Link to="/BasketPage">
                <FaShoppingCart className={iconClassName}/>
            </Link>
        );
    }
}
export default BasketIcon;*/
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

