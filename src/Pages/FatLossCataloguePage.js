import React from 'react'
import data from '../components/back/Data/Data';
import {Link} from "react-router-dom"
import AddToCartButton from '../components/AddToCartButton';
import "../FatLossCatalogue.css"
import fatLossBanner from "../components/CarouselImages/FatBurnerBanner.png"
import BasketIcon from '../BasketIcon';

const FatLossCataloguePage = ({ handleAddProduct, productItem}) => {

    const specificItemIds = ["6", "15", "18"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );


    return (
        <div>
            <BasketIcon />
            <img className='fat-loss-banner' src={fatLossBanner} alt='fatLoss' />
            <div className="fat-loss-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="fat-loss-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='fat-loss-page-link'>
                                <div className='fat-loss-image-container'>
                                    <img
                                        className={`fat-loss-page-cardImage fat-loss-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                
                                <div className='fat-loss-product-name-container'>
                                    <h2 className={`fat-loss-page-product-name fat-loss-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="fat-loss-page-price">£{productItem.price}</div>
                            </Link>
                            <div className='pre-workout-add-button'>
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
    )
}

export default FatLossCataloguePage