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
                <div className='row justify-content-center mx-auto '>
                    <div className='col-12 col-md-6 col-lg-6 mt-3'>
                    <Card>
                        <div className='d-flex justify-content-center align-items-center stock-image'>
                            <img className='more-stock-image img-fluid ' src='/images/more-stock copy.jpg' alt='more stock coming' />
                        </div>
                    </Card>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default WellBeingCataloguePage