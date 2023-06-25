import React from 'react';
import data from '../components/back/Data/Data';
import "../components/ProteinCatalogue.css";
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';

const ProteinCataloguePage = ({ productItem, handleAddProduct }) => {
    const specificItemIds = ["1", "5", "2", "3", "4", "7", "8", "16"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <div className="protein-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="protein-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='protein-page-link'>
                                <div>
                                    <img
                                        className={`protein-page-cardImage protein-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                <div>
                                    <h2 className={`protein-page-product-name protein-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="protein-page-price">£{productItem.price}</div>
                            </Link>
                            <div className='protein-add-button'>
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