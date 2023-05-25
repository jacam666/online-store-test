import React from "react";

const AddToCartButton = ({ handleAddProduct, productItem }) => {

    //const { id } = productItem;

    const handleClick = () => {
        handleAddProduct(productItem);
    };
    return (
        <div>
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
