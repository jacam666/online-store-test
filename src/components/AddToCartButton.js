import React, { useState } from "react";

const AddToCartButton = ({ handleAddProduct, productItem }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    
    const handleClick = () => {
        handleAddProduct(productItem);
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false)
        }, 2000);
    };
    return (
        <div>
            {isPopupVisible && (
                <div className="popup">
                    Item Added To Basket!
                </div>
            )}
            <button
                className="product-add-button"
                onClick={handleClick}
            >
                Add to Cart
            </button>
            
        </div>
    );
};

export default AddToCartButton;
