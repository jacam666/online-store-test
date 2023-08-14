import React from 'react'
import "../components/DietPlan.css"
import AddToCartButton from '../components/AddToCartButton'
import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'


const DietPlan = ({ productItem, handleAddProduct }) => {

    const product = {
        id: "24",
        image: "./images/personal-training-image-1.jpg",
        name: "Diet Plan",
        price: 30.00,
    };

    return (
        <div>
            <div className=' row d-flex justify-content-center align-items-center mx-auto'>
            <Card.Text className='text-center text-lg mt-3 diet-header' >Diet Plan</Card.Text>
            <Card.Text className='text-center text-md mb-3 diet-sub-header'>With 1 hour online consultation</Card.Text>
            </div>
            
            <div className='diet-plan-container'>
                {/*<div className='header-container'>
                    <div className='header'>Diet Plan</div>
                    <p className='header-2'>With 1 hour online consultation</p>
                </div>
                */}
                <div className='row d-flex'>
                    <div className='col-12 col-md-8 mx-auto'>
                        <Card className=''>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Img className='diet-plan-image' src='/images/personal-training-image-1.jpg' />
                                    </Col>
                                    <Col>
                                        <Card.Img className='diet-plan-image' src='/images/nutritionCertificate.jpg' />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="diet-plan-product-price">
                    <p>Price: £{product.price}</p>
                </div>
                {/*}
                <div className='diet-plan-image-container'>
                    <img className='diet-image' src='/images/personal-training-image-1.jpg' alt='personal-training' />
                    <img className='certificate' src='/images/nutritionCertificate.jpg' alt='nutrition-certificate' />
                </div>
                <div className="diet-plan-product-price">
                    <p>Price: £{product.price}</p>
                </div>
    */}
                <div className='row'>
                    <div className='col-10 col-md-8 mx-auto'>
                        <Card className=''>
                            <Card.Body className=' justify-content-center align-items-center'>
                                <Card.Text>
                                    Do you dream of transforming your body and feeling amazing?
                                </Card.Text>
                                <Card.Text>
                                    If so, you need Mark Etherden, the level 4 nutritional coach who has helped hundreds of people achieve their goals.
                                </Card.Text>
                                <Card.Text>
                                    Mark has 30 years of experience in creating personalized diet plans that suit your lifestyle, preferences and needs.
                                </Card.Text>
                                <Card.Text>
                                    He will also guide you through an online session where he will share his tips and tricks, and answer any questions you have. And the best part is, he won’t leave you hanging after that. He will be there to support you, adjust your plan and celebrate your progress.
                                </Card.Text>
                                <Card.Text>
                                    Don’t miss this opportunity to work with Mark and unleash your potential!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>


                <AddToCartButton
                    handleAddProduct={handleAddProduct}
                    productItem={product}
                />
            </div>
        </div>

    )
}

export default DietPlan
