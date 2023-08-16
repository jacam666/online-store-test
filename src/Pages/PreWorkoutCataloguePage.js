import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from "react-router-dom"
import AddToCartButton from '../components/AddToCartButton';
import "../PreWorkoutCatalogue.css"
import preWorkoutBanner from "../components/CarouselImages/B4ExtremeBanner.png"
import Card from 'react-bootstrap/Card';

const PreWorkoutCataloguePage = ({ productItem, handleAddProduct }) => {

    const specificItemIds = ["9", "10", "11", "13", "14", "19"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );



    return (
        <div>
            <img className='pre-workout-banner' src={preWorkoutBanner} alt="protein" />
            <div className="row">
                {filteredProducts.map(productItem => (
                    <div className="col-12 col-md-6 col-lg-4" key={productItem.id}>
                        <Card>
                            <Link to={productItem.to}>
                                <Card.Img variant="top" src={productItem.image} className={`pre-workout-image-${productItem.id}`} />
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
        /*
        <div>
            <img className='pre-workout-banner' src={preWorkoutBanner} alt='preWorkout' />
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
                            <div>
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
        */
    )
}

export default PreWorkoutCataloguePage;

