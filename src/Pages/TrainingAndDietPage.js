import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import Card from 'react-bootstrap/Card';
import "../TrainingAndDietPage.css"

const TrainingAndDietPage = ({ productItem, handleAddProduct }) => {

    const specificItemIds = ["20", "24"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <div className='row'>
                {filteredProducts.map(productItem => (
                    <div className="col-12 col-md-6" key={productItem.id}>
                        <Card>
                            <Link to={productItem.to}>
                                <Card.Img variant="top" src={productItem.image} className={`training-image-${productItem.id}`} />
                            </Link>
                            <Card.Body>
                                <Card.Title className={`card-header text-center training-product-name-${productItem.id}`}>{productItem.name}</Card.Title>
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
    )
}

export default TrainingAndDietPage;