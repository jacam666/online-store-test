import React from 'react'
import "../components/DietPlan.css"
import AddToCartButton from '../components/AddToCartButton'
import BasketIcon from '../BasketIcon';
//import dietText1 from "/images/brush_strokes text1.jpg"


const DietPlan = ({ productItem, handleAddProduct }) => {

    const product = {
        id: "24",
        image: "./images/personal-training-image-1.jpg",
        name: "Diet Plan",
        price: 30.00,
    };

    return (
        <div>
            <BasketIcon className="product-page-basket-icon" />
            <div className='diet-plan-container'>
                <div className='header-container'>
                    <div className='header'>Diet Plan</div>
                    <p className='header-2'>With 1 hour online consultation</p>
                </div>
                <div className='diet-plan-image-container'>
                    <img className='diet-image' src='/images/personal-training-image-1.jpg' alt='personal-training' />
                    <img className='certificate' src='/images/nutritionCertificate.jpg' alt='nutrition-certificate' />
                </div>
                <div className="diet-plan-product-price">
                    <p>Price: £{product.price}</p>
                </div>
                <div className='diet-plan-text-container'>
                    <img className='diet-text-1' src="/images/brush_strokes text1.jpg" alt='diet-text' />
                    <img className='diet-text-1' src="/images/brush_strokes text1.jpg" alt='diet-text' />
                    <img className='diet-text-1' src="/images/brush_strokes text1.jpg" alt='diet-text' />
                    <img className='diet-text-1' src="/images/brush_strokes text1.jpg" alt='diet-text' />
                    <img className='diet-text-1' src="/images/brush_strokes text1.jpg" alt='diet-text' />
                    {/*<p className='diet-plan-text-1'>
                        Do you dream of transforming your body and feeling amazing?
                    </p>
                    <p className='diet-plan-text-2'>
                        If so, you need Mark Etherden, the level 4 nutritional coach who has helped hundreds of people achieve their goals.
                    </p>
                    <p className='diet-plan-text-3'>
                        Mark has 30 years of experience in creating personalized diet plans that suit your lifestyle, preferences and needs.
                    </p>
                    <p className='diet-plan-text-4'>
                        He will also guide you through an online session where he will share his tips and tricks, and answer any questions you have. And the best part is, he won’t leave you hanging after that. He will be there to support you, adjust your plan and celebrate your progress.
                    </p>
                    <p className='diet-plan-text-5'>
                        Don’t miss this opportunity to work with Mark and unleash your potential!
                    </p>
    */}
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
