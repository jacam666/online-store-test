import React from 'react';
import data from '../components/back/Data/Data';
import "../components/ProteinCatalogue.css";
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import ProteinBanner from "../components/CarouselImages/OnlyWheYBanner.png"
import BasketIcon from '../BasketIcon';

const ProteinCataloguePage = ({ productItem, handleAddProduct }) => {
    const specificItemIds = ["1", "5", "2", "3", "4", "7", "8", "16"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <BasketIcon className="product-page-card-basket-icon" />
            <img className='protein-banner' src={ProteinBanner} alt="protein" />
            <div className="protein-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="protein-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='protein-page-link'>
                                <div className='protein-page-image-container'>
                                    <img
                                        className={`protein-page-cardImage protein-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                <div className='protein-page-product-name-container'>
                                    <h2 className={`protein-page-product-name protein-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="protein-page-price">£{productItem.price}</div>
                            </Link>
                            <div className='product-add-button'>
                                <AddToCartButton
                                    handleAddProduct={handleAddProduct}
                                    productItem={productItem}
                                />
                            </div>
                        </div>

                    </div>

                ))}

            </div>
        </div>
    );
};

export default ProteinCataloguePage