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
            <div className="row">
            {isPopupVisible && (
                <div className="col-6 popup">
                    Item Added To Basket!
                </div>
            )}
            </div>
            
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
