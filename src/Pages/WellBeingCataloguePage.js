import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import "../WellBeingCatalogue.css";
import wellBeingBanner from "../components/CarouselImages/after_train_banner_test_01_2545px.png-1.png"
import Card from 'react-bootstrap/Card';

const WellBeingCataloguePage = ({ productItem, handleAddProduct }) => {


    const specificItemIds = ["12", "17"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
        <img className='wellbeing-banner' src={wellBeingBanner} alt="protein" />
        <div className="row">
            {filteredProducts.map(productItem => (
                <div className="col-12 col-md-6 col-lg-6" key={productItem.id}>
                    <Card>
                        <Link to={productItem.to}>
                            <Card.Img variant="top" src={productItem.image} className='wellbeing-image' />
                        </Link>
                        <Card.Body>
                            <Card.Title className='card-header text-center'>{productItem.name}</Card.Title>
                            <Card.Text>{productItem.description}</Card.Text>
                            <Card.Text className='text-center'>
                                    <span className="font-weight-bold">Price: </span>
                                    £{productItem.price}
                                    </Card.Text>
                            <AddToCartButton
                                handleAddProduct={handleAddProduct}
                                productItem={productItem}
                            />
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    </div>
        /*<div>
            <img className='wellbeing-banner' src={wellBeingBanner} alt='wellbeing' />
            <div className="well-being-page-card-container">
                {filteredProducts.map((productItem) => (
                    <div className="well-being-page-card" key={productItem.id}>
                        <div>
                            <Link to={productItem.to} className='well-being-page-link'>
                                <div className='well-being-image-container'>
                                    <img
                                        className={`well-being-page-cardImage well-being-page-product-image-${productItem.id}`}
                                        src={productItem.image}
                                        alt={productItem.name}
                                    />
                                </div>

                                <div className='well-being-product-name-container'>
                                    <h2 className={`well-being-page-product-name well-being-page-product-name-${productItem.id}`}>
                                        {productItem.name}
                                    </h2>

                                </div>
                                <div className={`well-being-page-price well-being-page-price-${productItem.id}`}>
                                    £{productItem.price}
                                </div>
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
                <div className='stock-image-container'>
                    <img className='more-stock-image' src='/images/more-stock copy.jpg' alt='more stock coming' />
                </div>
            </div>
        </div>
        */
    )
}

export default WellBeingCataloguePage