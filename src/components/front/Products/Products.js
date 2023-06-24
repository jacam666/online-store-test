import React from "react";
import { Link } from "react-router-dom";
import data from "../../back/Data/Data";
import ImageCarousel from "../../ImageCarousel";
import AddToCartButton from "../../AddToCartButton";

const Products = ({ productItem, handleAddProduct }) => {
    return (
        <div>
            <ImageCarousel />
            <div className="card-container">
                {data.productItems &&
                    data.productItems.map((productItem) => (
                        <div className="card" key={productItem.id}>
                            <div>
                                <Link to={productItem.to}>
                                    <div>
                                        <img
                                            className={`cardImage product-image-${productItem.id}`}
                                            src={productItem.image}
                                            alt={productItem.name}
                                        />
                                    </div>
                                    <div>
                                        <h2 className="main-page-product-name">{productItem.name}</h2>
                                    </div>
                                    <div className="price">£{productItem.price}</div>
                                </Link>
                                <AddToCartButton
                                    handleAddProduct={handleAddProduct}
                                    productItem={productItem} />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Products;
