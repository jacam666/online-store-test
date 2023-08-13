import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import "../TrainingAndDietPage.css"

const TrainingAndDietPage = ({ productItem, handleAddProduct }) => {

    const specificItemIds = ["20", "24"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <div className="training-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="training-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='training-page-link'>
                                <div className='training-page-image-container'>
                                    <img
                                        className={`training-page-cardImage training-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>
                                <div className='training-page-name-container'>
                                    <h2 className={`training-page-product-name training-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className="training-page-price">£{productItem.price}</div>
                            </Link>
                            <div>
                                <AddToCartButton
                                    handleAddProduct={handleAddProduct}
                                    productItem={productItem}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                    <img className='training-text' src="/images/13759 copystudiotext.png" alt='text' />
                <div className='training-image-container'>
                        <img className='training-certificate' src='/images/nutritionCertificate.jpg' alt='certificate' />
                </div>
            </div>
        </div>
    )
}

export default TrainingAndDietPage;