import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import "../WellBeingCatalogue.css";

const WellBeingCataloguePage = ({ productItem, handleAddProduct}) => {


    const specificItemIds = ["12", "17"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <div className="well-being-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="well-being-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='well-being-page-link'>
                                <div>
                                    <img
                                        className={`well-being-page-cardImage well-being-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                
                                <div>
                                    <h2 className={`well-being-page-product-name well-being-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="well-being-page-price">£{productItem.price}</div>
                            </Link>
                            <AddToCartButton
                                handleAddProduct={handleAddProduct}
                                productItem={productItem}
                            />
                        </div>
                    </div>
                ))}
                <div className='stock-image-container'>
                    <img className='more-stock-image' src='/images/more-stock copy.jpg' alt='more stock coming' />
                </div>
            </div>
        </div>
    )
}

export default WellBeingCataloguePage