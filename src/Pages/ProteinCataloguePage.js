import React from 'react';
import data from '../components/back/Data/Data';
import "../components/ProteinCatalogue.css";
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import ProteinBanner from "../components/CarouselImages/OnlyWheYBanner.png"
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProteinCataloguePage = ({ productItem, handleAddProduct }) => {
    const specificItemIds = ["1", "5", "2", "3", "4", "7", "8", "16"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <img className='protein-banner' src={ProteinBanner} alt="protein" />
            <div className="row">
                {filteredProducts.map(productItem => (
                    <div className="col-12 col-md-6 col-lg-4" key={productItem.id}>
                        <Card>
                            <Link to={productItem.to}>
                                <Card.Img variant="top" src={productItem.image} className='protein-image' />
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
        </div> */
    );



};

export default ProteinCataloguePage