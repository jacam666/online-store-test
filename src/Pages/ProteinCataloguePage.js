import React from 'react';
import data from '../components/back/Data/Data';
import "../components/ProteinCatalogue.css";
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import ProteinBanner from "../components/CarouselImages/OnlyWheYBanner.png"
import Card from 'react-bootstrap/Card';

const ProteinCataloguePage = ({  handleAddProduct }) => {
    const specificItemIds = ["1", "16", "2", "3", "4", "7", "8", "5"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <img className='protein-banner' src={ProteinBanner} alt="protein" />
            <div className="row">
                {filteredProducts.map(productItem => (
                    <div className="col-12 col-md-6 col-lg-3" key={productItem.id}>
                        <Card>
                            <Link to={productItem.to}>
                                <Card.Img variant="top" src={productItem.image} className={`protein-image-${productItem.id}`} />
                            </Link>
                            <Card.Body>
                                <Card.Title className={`card-header text-center product-name-${productItem.id}`}>{productItem.name}</Card.Title>
                                <Card.Text>{productItem.description}</Card.Text>
                                <Card.Text className='text-center'>
                                    <span className="font-weight-bold"></span>
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
    );
};

export default ProteinCataloguePage