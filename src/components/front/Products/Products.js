import React from "react";
import { Link } from "react-router-dom";
import data from "../../back/Data/Data";

const Products = ({ productItems, handleAddProduct }) => {
    return (
        <div className="card-container">
            {data.productItems &&
                data.productItems.map((productItem) => (
                    <div className="card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to}>
                                <div>
                                    <img
                                        className="cardImage"
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                <div>
                                    <h2 className="main-page-product-name">{productItem.name}</h2>
                                </div>
                                <div className="price">£{productItem.price}</div>
                            </Link>
                            <div>
                                <button
                                    className="product-add-button"
                                    onClick={() => handleAddProduct(productItem)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Products;
