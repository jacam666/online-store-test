import React from 'react'
import data from '../components/back/Data/Data';
import { Link } from "react-router-dom"
import AddToCartButton from '../components/AddToCartButton';
import "../FatLossCatalogue.css"
import fatLossBanner from "../components/CarouselImages/FatBurnerBanner.png"
import Card from 'react-bootstrap/Card';
import COLORS from '../Styles.js'


const FatLossCataloguePage = ({ handleAddProduct, productItem }) => {

    const specificItemIds = ["6", "15", "18"];

    const filteredProducts = data.productItems.filter((productItem) =>
        specificItemIds.includes(productItem.id)
    );

    return (
        <div>
            <img className='protein-banner' src={fatLossBanner} alt="protein" />
            <div className="row">
                {filteredProducts.map(productItem => (
                    <div className="col-12 col-md-6 col-lg-4" key={productItem.id}>
                        <Card>
                            <Link to={productItem.to}>
                                <Card.Img variant="top" 
                                src={productItem.image} 
                                className='fat-loss-image'
                                style={{backgroundColor: COLORS.background}}
                                />
                            </Link>
                            <Card.Body>
                                <Card.Title className='card-header text-center'>{productItem.name}</Card.Title>
                                <Card.Text>{productItem.description}</Card.Text>
                                <Card.Text className='text-center'>
                                    <span className="font-weight-bold"> </span>
                                    £{productItem.price}
                                    </Card.Text>
                                {/*<Button variant="primary">Add To Basket</Button>*/}
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

export default FatLossCataloguePage