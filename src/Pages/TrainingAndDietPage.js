import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import "../TrainingAndDietPage.css"
//import studioImage from "../components/StudioImages/studio-image.jpg"
//import BasketIcon from '../BasketIcon';
//import Footer from '../components/Footer';
//import textBorderImage from "../components/images/grunge-border_1048-7373.webp"

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
                    {/*<img className='training-studio' src={studioImage} alt='studio' />*/}
                    {/*<Link to="/TheStudioPage">
                        <div className="training-text-overlay">
                            <p className="training-image-text">SNC Studio</p>
                        </div>
                </Link>*/}
                </div>
            </div>
        </div>
    )
}

export default TrainingAndDietPage;