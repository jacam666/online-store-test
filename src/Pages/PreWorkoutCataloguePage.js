import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from "react-router-dom"
import AddToCartButton from '../components/AddToCartButton';
import "../PreWorkoutCatalogue.css"


const PreWorkoutCataloguePage = ({ productItem, handleAddProduct }) => {

    const specificItemIds = ["9", "10", "11", "13", "14", "19"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );



    return (
        <div>
            <div className="pre-workout-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="pre-workout-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='pre-workout-page-link'>
                                <div className='pre-workout-page-image-container'>
                                    <img
                                        className={`pre-workout-page-cardImage pre-workout-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                <div className='pre-workout-page-product-name-container'>
                                    <h2 className={`pre-workout-page-product-name pre-workout-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="pre-workout-page-price">£{productItem.price}</div>
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

export default PreWorkoutCataloguePage;

/*
import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from "react-router-dom"
import AddToCartButton from '../components/AddToCartButton';
import "../PreWorkoutCatalogue.css"

const PreWorkoutCataloguePage = ({ productItem, handleAddProduct, click }) => {

    const specificItemIds = ["9", "10", "11", "13", "14", "19"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            {!click && (
                <div className="pre-workout-page-card-container">
                    {filteredProducts.map((productItem) => (
                        <div className="pre-workout-page-card" key={productItem.id}>
                            <div>
                                <Link to={productItem.to} className='pre-workout-page-link'>
                                    <div className='pre-workout-page-image-container'>
                                        <img
                                            className={`pre-workout-page-cardImage pre-workout-page-product-image-${productItem.id}`}
                                            src={productItem.image}
                                            alt={productItem.name}
                                        />
                                    </div>
                                    <div className='pre-workout-page-product-name-container'>
                                        <h2 className={`pre-workout-page-product-name pre-workout-page-product-name-${productItem.id}`}>
                                            {productItem.name}
                                        </h2>

                                    </div>
                                    <div className="pre-workout-page-price">£{productItem.price}</div>
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
            )}
        </div>
    )
}

export default PreWorkoutCataloguePage;  */
